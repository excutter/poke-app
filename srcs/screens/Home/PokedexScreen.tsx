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
import { useSelector } from 'react-redux'

import usePokemon from '../../hooks/usePokemon'

import { PokemonCell } from '../../components'

import styles from './styles/pokedexscreen.styles'
import { PokemonCellProp } from '../../types/PokemonProps'

type PokedexScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Pokedex'>

type PokedexScreenProps = {
    navigation: PokedexScreenNavigationProp
}

const PokedexScreen: FC<PokedexScreenProps> = ({ navigation }) => {

    const [pageNumber, setPageNumber] = useState(() => 0)
    const favourites = useSelector((state: PokemonCellProp[]) => state)
    const {
        pokemon,
        loading,
        hasMore
    } = usePokemon({ pageNumber })

    const loadMorePokemon = useCallback(() => {
        hasMore && !loading && setPageNumber(prevPage => prevPage + 1)
    }, [hasMore, loading])

    const onPokemonPress = (pokemon: PokemonCellProp) => navigation.navigate('PokemonDetail', { pokemon })

    return <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        numColumns={2}
        removeClippedSubviews={true}
        data={pokemon}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
        <PokemonCell 
            index={index + 1} 
            pokemon={item}
            isFavorite={favourites.find(pokemon => pokemon.id === (index + 1).toString()) && true}
            onPress={onPokemonPress} />)}
        onEndReached={loadMorePokemon}
        ListFooterComponent={
            loading ? <View style={{ width: '100%', height: 50 }}>
                <ActivityIndicator size="large" color="black" />
            </View>
                : null
        } />
}

export default PokedexScreen
