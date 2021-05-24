import React, { useState, useCallback } from 'react'
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native'
import usePokemon from '../../hooks/usePokemon'

import PokemonCell from './PokemonCell'

import styles from './styles/homescreen.styles'

const HomeScreen = () => {

    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(() => 0)
    const {
        pokemon,
        loading,
        hasMore,
        error
    } = usePokemon({ query, pageNumber })

    const loadMorePokemon = useCallback(() => {
        hasMore && setPageNumber(prevPage => prevPage + 1)
    }, [hasMore])

    return <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        numColumns={2}
        initialNumToRender={20}
        maxToRenderPerBatch={1}
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({ item, index }) => <PokemonCell index={index} pokemon={item} />}
        // onEndReachedThreshold={0.3}
        onEndReached={loadMorePokemon}
        ListFooterComponent={
            loading ? <View style={{ width: '100%', height: 50 }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
                : null
        } />
}

export default HomeScreen
