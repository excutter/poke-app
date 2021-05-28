import React, { FC } from 'react'
import { 
    FlatList, StyleSheet 
} from 'react-native'
import { Label } from '../../components'

import { MoveProp } from '../../types/PokemonProps'

type MovesProps = {
    movements: { move: MoveProp }[]
}

const Moves: FC<MovesProps> = ({ movements }) => {
    return <FlatList
        contentContainerStyle={styles.movementsContent}
        data={movements}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
            <Label
                padding={[0, 0, 16, 0]} 
                fontSize={15}>
                {item.move.name}
            </Label>
        )} />
}

export default Moves

const styles = StyleSheet.create({
    movementsContent: { paddingTop: 16 }
})
