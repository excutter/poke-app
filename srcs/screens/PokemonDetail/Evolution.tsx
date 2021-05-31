import React, { 
    FC,
    useEffect,
    useState
} from 'react'
import { ActivityIndicator } from 'react-native'

import { Card, Label } from '../../components'

import { useFetch } from '../../hooks'

type EvolutionProps = {
    pokemonID: string
}

const Evolution: FC<EvolutionProps> = ({ pokemonID }) => {

    const state = useFetch({ query: `evolution-chain/${pokemonID}/`})

    if (state.status === 'loading') return <ActivityIndicator size="large" color="black" />

    if (state.status === 'error') return <Card><Label>{state.error}</Label></Card>

    return null
}

export default Evolution
