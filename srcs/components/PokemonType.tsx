import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import Card from './Card'
import Label from './Label'

import { PokemonTypeSlotProp } from '../types/PokemonProps'
import { handlePadding } from '../styles/functionStyles'
import { colors } from '../styles'

type PokemonTypeProps = {
    type: PokemonTypeSlotProp
}

const PokemonType: FC<PokemonTypeProps> = ({
    type
}) => {
    return <Card style={[styles.typeContainer, { backgroundColor: colors.pokemon[type.type.name] }]}>
        <Label
            bold
            white
            fontSize={13}>
            {`${type.type.name[0].toUpperCase()}${type.type.name.slice(1)}`}
        </Label>
    </Card>

}

export default PokemonType

const styles = StyleSheet.create({
    typeContainer: {
        width: 'auto',
        ...handlePadding([3, 10]),
        marginRight: 16
    }
})
