import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { 
    PokedexScreen,
    PokemonDetailScreen 
} from '../screens'

import MainStackNavigation from './MainStackNavigation'
import Modal from '../components/Modal'

export type MainStackParamList = {
    Main: undefined;
    Modal: { component: JSX.Element }
}
const RootStackNavigator = createStackNavigator<MainStackParamList>()

const RootStackNavigation: FC = () => {
    return <RootStackNavigator.Navigator mode="modal" headerMode="none">
        <RootStackNavigator.Screen  name="Main" component={MainStackNavigation} />
        <RootStackNavigator.Screen name="Modal" component={Modal} />
    </RootStackNavigator.Navigator>
}

export default RootStackNavigation
