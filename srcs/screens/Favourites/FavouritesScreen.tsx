import React, { FC } from 'react'
import { VirtualizedList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import { PokemonCell } from '../../components'

import { MainStackParamList } from '../../stacks/MainStackNavigation'
import { PokemonCellProp } from '../../types/PokemonProps'
import styles from './styles/favouritesscreen.styles'

type FavouritesScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Pokedex'>

type FavouritesScreenProps = {
    navigation: FavouritesScreenNavigationProp
}

const FavouritesScreen: FC<FavouritesScreenProps> = ({ navigation }) => {

    const favourites = useSelector(state => state)

    const onPokemonPress = (pokemon: PokemonCellProp) => navigation.navigate('PokemonDetail', { pokemon })

    return <VirtualizedList
        style={styles.virtualizedList}
        data={favourites}
        keyExtractor={(_, index) => index.toString()}
        getItemCount={(data: []) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item }: { item: PokemonCellProp }) => (
            <PokemonCell
                index={parseInt(item.id)}
                pokemon={item}
                onPress={onPokemonPress} />
        )} />
}

export default FavouritesScreen
