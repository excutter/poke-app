import React, { 
    FC,
    useMemo
} from 'react'
import {
    View,
    ScrollView,
    ActivityIndicator,
    VirtualizedList
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import SpriteCell from './SpriteCell'
import { Card, PokemonTypes } from '../../components'

import { usePokemon } from '../../hooks'

import { MainStackParamList } from '../../stacks/MainStackNavigation'
import { SpritesProp } from '../../types/PokemonProps'

import styles from './styles/pokemondetailscreen.styles'
import { colors, hexToRgbA } from '../../styles'

type PokemonDetailScreenNavigationProp = StackNavigationProp<MainStackParamList, 'PokemonDetail'>
type PokemonDetailScreenRouteProp = RouteProp<MainStackParamList, 'PokemonDetail'>

type PokemonDetailScreenProps = {
    navigation: PokemonDetailScreenNavigationProp,
    route: PokemonDetailScreenRouteProp
}

const PokemonDetail: FC<PokemonDetailScreenProps> = ({
    navigation,
    route
}) => {

    const {
        pokemonDetail,
        loading,
        error
    } = usePokemon({ query: route.params.pokemon.id })

    const pokemon = useMemo(() => {
        if (!pokemonDetail) return null

        let pokemon = { ...pokemonDetail, images: [''] }
        pokemon.images = Object.keys(pokemon.sprites)
                        .filter(key => !['other', 'versions'].includes(key))
                        .filter(key => pokemon.sprites[key as keyof SpritesProp] !== null)
                        .map((key: string) => pokemon.sprites[key as keyof SpritesProp])

        return pokemon
    }, [pokemonDetail])

    if (loading || !pokemon)
        return <ActivityIndicator
            style={styles.loading}
            color="black"
            size="large" />

    return <View style={[styles.detailContainer, { backgroundColor: hexToRgbA(colors.pokemon[pokemon.types[0].type.name], 0.7) }]}>
        <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}>
            <PokemonTypes types={pokemon.types} />
            <VirtualizedList
                style={styles.spritesList}
                horizontal={true}
                pagingEnabled={true}
                data={pokemon.images}
                keyExtractor={(_,  index) => index.toString()}
                renderItem={({ _, index }) => <SpriteCell url={pokemon.images[index]} />}
                getItemCount={(data: []) => data.length}
                getItem={item => item} />
            <Card style={styles.infoContainer}>
                
            </Card>
        </ScrollView>
    </View>
}

export default PokemonDetail
