import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import Card from './Card' 
import Label from './Label'

import { faStar } from '@fortawesome/free-solid-svg-icons'

type PokemonDetailsProps = {
    name: string,
    url: string
}

type PokemonProps = {
    index: number,
    onPress: (id: string, name: string) => void,
    pokemon: PokemonDetailsProps,
    isFavorite: boolean
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

    return <Card
        style={blockStyles}
        lightGray
        onPress={() => onPress((index + 1).toString(), pokemon.name)}>
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
