import React, { FC } from 'react'
import {
    ScrollView, 
    StyleSheet, 
    VirtualizedList
} from 'react-native'

import { Card, Label } from '../../components'

import { AbilityProp } from '../../types/PokemonProps'

type AboutProps = {
    abilities: { ability: AbilityProp }[]
}

const About: FC<AboutProps> = ({ abilities }) => {
    return <ScrollView style={styles.aboutContainer}>
        <Label
            fontSize={16}
            bold>
            Abilities
        </Label>
        <VirtualizedList
            contentContainerStyle={styles.abilitiesList}
            horizontal={true}
            data={abilities}
            getItemCount={(data: []) => data.length}
            getItem={(data, index) => data[index]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }: { item: { ability: AbilityProp } }) => (
                <Card 
                    transparent 
                    padding={[0]}
                    margin={[0, 16, 0, 0]}>
                    <Label 
                        style={styles.ability}
                        fontSize={15}>
                        {item.ability.name}
                    </Label>
                </Card>
            )} />
    </ScrollView>
}

export default About

const styles = StyleSheet.create({
    aboutContainer: { paddingTop: 16 },
    abilitiesList: { flexGrow: 1 }
})
