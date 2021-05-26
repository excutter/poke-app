import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { 
    PokedexScreen,
    PokemonDetailScreen 
} from '../screens'

export type MainStackParamList = {
    Pokedex: undefined;
    PokemonDetail: { pokemon: { id: string, name: string } }
}
const StackNavigator = createStackNavigator<MainStackParamList>()

const MainStackNavigation: FC = () => {
    return <StackNavigator.Navigator initialRouteName="Pokedex">
        <StackNavigator.Screen
            name="Pokedex"
            component={PokedexScreen} />
        <StackNavigator.Screen
            name="PokemonDetail"
            component={PokemonDetailScreen}
            options={({ route, navigation }) => ({ 
                title: route.params.pokemon.name,
                headerShown: false 
            })} />
    </StackNavigator.Navigator>
}

export default MainStackNavigation
