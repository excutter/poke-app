import React, { useEffect, FC } from 'react'
import { usePokemon } from '../../hooks'

import { Card, Label } from '../../components'

import styles from './styles/pokemoncell.styles'
import { GestureResponderEvent } from 'react-native'

type PokemonDetailsProps = {
    name: string,
    url: string
}

type PokemonProps = {
    index: number,
    onPress: (id: string, name: string) => void,
    pokemon: PokemonDetailsProps
}

const PokemonCell: FC<PokemonProps> = ({
    index,
    onPress,
    pokemon
}) => {
    
    const blockStyles: any = [
        styles.pokemonCell,
        index % 2 !== 0 ? styles.pokemonCellPair : styles.pokemonCellOdd,
    ]    

    return <Card
        style={blockStyles} 
        lightGray
        onPress={() => onPress((index + 1).toString(), pokemon.name)}>
        <Label
            center 
            bold>
            {pokemon.name}
        </Label>
    </Card>
}

export default PokemonCell
