import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import Card from './Card' 
import Label from './Label'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { PokemonCellProp } from '../types/PokemonProps'

type PokemonProps = {
    index: number,
    onPress: (pokemon: PokemonCellProp) => void,
    pokemon: PokemonCellProp,
    isFavorite?: boolean
}

const PokemonCell: FC<PokemonProps> = ({
    index,
    onPress,
    pokemon,
    isFavorite = false
}) => {

    const blockStyles: any = [
        styles.pokemonCell,
        index % 2 !== 0 ? styles.pokemonCellPair : styles.pokemonCellOdd,
    ]

    const onPokemonPress = () => {
        const newPokemon: PokemonCellProp = { id: index.toString(), name: pokemon.name }
        onPress && onPress(newPokemon)
    }

    return <Card
        style={blockStyles}
        lightGray
        onPress={onPokemonPress}>
        {
            isFavorite &&
            <FontAwesomeIcon
                style={styles.favorite}
                size={14}
                icon={faStar} />
        }
        <Label
            textAlign="center"
            bold>
            {pokemon.name}
        </Label>
    </Card>
}

export default PokemonCell

const styles = StyleSheet.create({
    pokemonCell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 16
    },
    pokemonCellPair: { 
        marginLeft: 8,
        marginRight: 0
    },
    pokemonCellOdd: {
        marginLeft: 0,
        marginRight: 8
    },
    favorite: {
        position: 'absolute',
        top: 10,
        right: 16
    }
})
