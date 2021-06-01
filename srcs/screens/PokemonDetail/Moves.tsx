import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import {
    FlatList,
    StyleSheet
} from 'react-native'

import { Card, Label } from '../../components'
import MovementScreen from './MovementScreen'

import { MovementProp } from '../../types/PokemonProps'

type MovesProps = {
    movements: { move: MovementProp }[]
}

const Moves: FC<MovesProps> = ({ movements }) => {

    const navigation = useNavigation()

    const onMovementPress = (movement: MovementProp) => navigation.navigate(
        'Modal',
        {
            title: movement.name,
            subtitle: 'Movement',
            component: <MovementScreen movement={movement} />,
        }
    )

    return <FlatList
        contentContainerStyle={styles.movementsContent}
        data={movements}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
            <Card
                padding={[8]}
                margin={[0, 0, 10]}
                onPress={() => onMovementPress(item.move)}>
                <Label
                    fontSize={15}>
                    {item.move.name}
                </Label>
            </Card>
        )} />
}

export default Moves

const styles = StyleSheet.create({
    movementsContent: { paddingTop: 16 }
})
