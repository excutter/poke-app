import React, { 
    useState, 
    useCallback, 
    FC 
} from 'react'
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParamList } from '../../stacks/MainStackNavigation'

import usePokemon from '../../hooks/usePokemon'

import PokemonCell from './PokemonCell'

import styles from './styles/pokedexscreen.styles'

type PokedexScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Pokedex'>

type PokedexScreenProps = {
    navigation: PokedexScreenNavigationProp
}

const PokedexScreen: FC<PokedexScreenProps> = ({ navigation }) => {

    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(() => 0)
    const {
        pokemon,
        loading,
        hasMore,
        error
    } = usePokemon({ query, pageNumber })

    const loadMorePokemon = useCallback(() => {
        hasMore && !loading && setPageNumber(prevPage => prevPage + 1)
    }, [hasMore])

    const onPokemonPress = (id: string, name: string) => navigation.navigate('PokemonDetail', { pokemon: { id, name } })

    return <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        numColumns={2}
        initialNumToRender={20}
        removeClippedSubviews={true}
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({ item, index }) => (
        <PokemonCell 
            index={index} 
            pokemon={item}
            onPress={onPokemonPress} />)}
        onEndReached={loadMorePokemon}
        ListFooterComponent={
            loading ? <View style={{ width: '100%', height: 50 }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
                : null
        } />
}

export default PokedexScreen
