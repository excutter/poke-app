import React, { FC } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../stacks/RootStackNavigation'
import { colors } from '../styles'

type PokemonDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Modal'>
type PokemonDetailScreenRouteProp = RouteProp<RootStackParamList, 'Modal'>

type ModalProps = {
    navigation: PokemonDetailScreenNavigationProp,
    route: PokemonDetailScreenRouteProp
}

const Modal: FC<ModalProps> = ({ 
    navigation,
    route
}) => {
    return <ScrollView style={style.modalContainer}>
        {route.params.component}
    </ScrollView>

}

export default Modal

const style = StyleSheet.create({
    modalContainer: { backgroundColor: colors.white }
})
