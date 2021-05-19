import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    FlatList
} from 'react-native'
import usePokemon from '../../hooks/usePokemon'

import PokemonCell from './PokemonCell'

import styles from './homescreen.styles'

const HomeScreen = () => {

    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] =  useState(0)

    const {
        pokemon,
        loading,
        hasMore,
        error
    } = usePokemon({ query, pageNumber })

    useEffect(() => {
        console.log(pokemon)
    }, [])

    return <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        data={pokemon}
        keyExtractor={item => item}
        renderItem={({ item }) => <PokemonCell pokemon={item}/>} />
}

export default HomeScreen
