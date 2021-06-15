import React, { FC } from 'react'
import { 
    createStackNavigator,
    StackNavigationProp
} from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import {
    FavouritesScreen,
    PokedexScreen,
    PokemonDetailScreen
} from '../screens'
import { 
    Card, 
    Button 
} from '../components'
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

const StackNavigator = createStackNavigator<MainStackParamList>()

const MainStackNavigation: FC<MainStackNavigationProps> = ({ navigation }) => {
    return <StackNavigator.Navigator initialRouteName="Pokedex">
        <StackNavigator.Screen
            name="Pokedex"
            component={PokedexScreen}
            options={{
                headerRight: () => <Card transparent>
                    <Button
                        title="Fav"
                        color="black"
                        icon={faStar}
                        onPress={() => navigation.navigate('Favourites')} />
                </Card>
            }} />
        <StackNavigator.Screen
            name="PokemonDetail"
            component={PokemonDetailScreen}
            options={({ route }) => ({
                title: route.params.pokemon.name,
                headerShown: false
            })} />
        <StackNavigator.Screen
            name="Favourites"
            component={FavouritesScreen} />
    </StackNavigator.Navigator>
}

export default MainStackNavigation
