import React, { 
    FC,
    useState,
    useMemo
} from 'react'
import {
    View,
    ScrollView,
    ActivityIndicator,
    VirtualizedList,
    NativeSyntheticEvent,
    NativeSegmentedControlIOSChangeEvent
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import SegmentedControl from '@react-native-segmented-control/segmented-control'

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

type SegmentedOptionProp = {
    label: string,
    value: number
}

const ABOUT: SegmentedOptionProp = { label: 'About', value: 0 },
    BASE_STATS: SegmentedOptionProp = { label: 'Base Stats', value: 1 },
    EVOLUTION: SegmentedOptionProp = { label: 'Evolution', value: 2 },
    MOVES: SegmentedOptionProp = { label: 'Moves', value: 3 }

const PokemonDetail: FC<PokemonDetailScreenProps> = ({
    navigation,
    route
}) => {

    const [segmentedIndex, setSegmentedIndex] = useState(0)
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

    const onSegmentedChange = (event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => setSegmentedIndex(event.nativeEvent.selectedSegmentIndex)

    if (loading || !pokemon)
        return <ActivityIndicator
            style={styles.loading}
            color="black"
            size="large" />

    return <ScrollView 
            style={[styles.detailContainer, { backgroundColor: hexToRgbA(colors.pokemon[pokemon.types[0].type.name], 0.7) }]}
            contentContainerStyle={styles.scrollViewContent}>
            <PokemonTypes types={pokemon.types} />
            <VirtualizedList
                style={styles.spritesList}
                horizontal={true}
                pagingEnabled={true}
                data={pokemon.images}
                keyExtractor={(_,  index) => index.toString()}
                renderItem={({ item }: { item: string }) => <SpriteCell url={item} />}
                getItemCount={(data: []) => data.length}
                getItem={(data, index) => data[index]} />
            <Card style={styles.infoContainer}>
            <SegmentedControl
                values={[ABOUT.label, BASE_STATS.label, EVOLUTION.label, MOVES.label]}
                selectedIndex={segmentedIndex}
                onChange={onSegmentedChange} />
            {/* <View style={{ height: 3000, width: 100 }}></View> */}
            </Card>
        </ScrollView>
}

export default PokemonDetail
