import React, { FC } from 'react'
import { View, Text } from 'react-native'

interface PokemonDetailsProps {
    name: string,
    url: string
}

interface PokemonProps {
    pokemon: PokemonDetailsProps
}

const PokemonCell: FC<PokemonProps> = (props) => {
    return <View>
        <Text>Pokemon</Text>
    </View>
}

export default PokemonCell
