import React, {
    FC,
    ReactNode
} from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import MainStackNavigation from './MainStackNavigation'
import Modal from '../components/Modal'
import { Label } from '../components'

export type RootStackParamList = {
    Main: undefined;
    Modal: { 
        component?: ReactNode, 
        title?: string,
        subtitle?: string 
    }
}
const RootStackNavigator = createStackNavigator<RootStackParamList>()

const RootStackNavigation: FC = () => {
    return <RootStackNavigator.Navigator
        mode="modal"
        initialRouteName="Main"
        screenOptions={() => ({
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.ModalPresentationIOS
        })}>
        <RootStackNavigator.Screen
            name="Main"
            component={MainStackNavigation}
            options={() => ({ headerShown: false })} />
        <RootStackNavigator.Screen
            name="Modal"
            component={Modal}
            options={({ route }) => ({
                header: () => (
                    <View style={styles.modalHeaderContainer}>
                        <Label padding={[0]} margin={[10, 0, -5]}>{route.params.subtitle}</Label>
                        <Label
                            bold
                            fontSize={30}
                            padding={[0, 16, 0]}>
                            {route.params.title}
                        </Label>
                    </View>
                )
            })} />
    </RootStackNavigator.Navigator>
}

export default RootStackNavigation

const styles = StyleSheet.create({
    modalHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})