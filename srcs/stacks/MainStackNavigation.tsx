import React, { FC } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { RouteProp } from '@react-navigation/native'

import {
    FavouritesScreen,
    PokedexScreen,
    PokemonDetailScreen
} from '../screens'
import { Button } from '../components'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { PokemonCellProp } from '../types/PokemonProps'

export type MainStackParamList = {
    Pokedex: undefined,
    PokemonDetail: { pokemon: PokemonCellProp },
    Favourites: undefined
}

type Navigation = StackNavigationProp<MainStackParamList, 'PokemonDetail'>
type Route = RouteProp<MainStackParamList, 'PokemonDetail'>

type MainStackNavigationProps = {
    navigation: Navigation,
    route: Route
}

const StackNavigator = createNativeStackNavigator<MainStackParamList>()

const MainStackNavigation: FC<MainStackNavigationProps> = ({ navigation }) => {
    return <StackNavigator.Navigator
        initialRouteName="Pokedex"
        screenOptions={{ headerLargeTitle: true }}>
        <StackNavigator.Screen
            name="Pokedex"
            component={PokedexScreen}
            options={{
                headerRight: () => (
                    <Button
                        title="Fav"
                        backgroundColor="transparent"
                        color="black"
                        size={22}
                        icon={faStar}
                        width="auto"
                        height="auto"
                        onPress={() => navigation.navigate('Favourites')} />
                )
            }} />
        <StackNavigator.Screen
            name="PokemonDetail"
            component={PokemonDetailScreen}
            options={({ route }) => ({
                title: route.params.pokemon.name,
                headerShown: false,
                headerStyle: { backgroundColor: 'transparent' },
                headerRight: () => (
                    <Button
                        title="Fav"
                        backgroundColor="transparent"
                        color="black"
                        size={22}
                        icon={faStar}
                        width="auto"
                        height="auto"
                        onPress={() => navigation.navigate('Favourites')} />
                )
            })} />
        <StackNavigator.Screen
            name="Favourites"
            component={FavouritesScreen} />
    </StackNavigator.Navigator>
}

export default MainStackNavigation
