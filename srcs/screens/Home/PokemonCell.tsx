import React, { FC } from 'react'
import { View, Text } from 'react-native'

import styles from './styles/pokemoncell.styles'

interface PokemonDetailsProps {
    name: string,
    url: string
}

interface PokemonProps {
    index: number,
    pokemon: PokemonDetailsProps
}

const PokemonCell: FC<PokemonProps> = ({
    index,
    pokemon
}) => {
    
    const blockStyles = [
        styles.pokemonCell,
        index % 2 != 0 ? styles.pokemonCellPair : styles.pokemonCellOdd,
    ]

    return <View style={blockStyles}>
        <Text>{pokemon.name}</Text>
    </View>
}

export default PokemonCell
