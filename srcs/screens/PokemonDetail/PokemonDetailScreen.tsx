import React, { 
    FC
} from 'react'
import {
    View,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, useFocusEffect } from '@react-navigation/native'

import { MainStackParamList } from '../../stacks/MainStackNavigation'
import { usePokemon } from '../../hooks'

import styles from './styles/pokemondetailscreen.styles'

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

    useFocusEffect(() => {
        if (!loading) console.log(pokemonDetail?.name)
    })

    if (loading || !pokemonDetail)
        return <ActivityIndicator
            style={styles.loading}
            color="black"
            size="large" />

    return <View style={styles.view}>
        <ScrollView>
            
        </ScrollView>
    </View>
}

export default PokemonDetail
