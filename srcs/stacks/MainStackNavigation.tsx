import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from '../screens'

const StackNavigator = createStackNavigator()

const MainStackNavigation: FC = (props) => {
    return <StackNavigator.Navigator initialRouteName="Pokemon">
        <StackNavigator.Screen
            name="Pokemon"
            component={HomeScreen} />
    </StackNavigator.Navigator>
}

export default MainStackNavigation
