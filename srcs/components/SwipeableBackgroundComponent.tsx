import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import {
    View,
    TouchableOpacity
} from 'react-native'

import Label from './Label'

import { colors } from '../styles'
import { getScreenWidth, handleMargin } from '../styles/functionStyles'

const SwipeableBackgroundComponent: FC = () => {
    return <View style={styles.swipeableBackgroundComponent}>
        <TouchableOpacity
            style={styles.leftSideWrapper}
            activeOpacity={1}>
            <Label
                style={styles.label}
                white>Delete</Label>
        </TouchableOpacity>
        {/* <TouchableOpacity
            style={styles.rightSideWrapper}
            activeOpacity={1}>
            <Label
                style={styles.label}
                white>Entregar</Label>
        </TouchableOpacity> */}
    </View>
}

export default SwipeableBackgroundComponent

const styles = StyleSheet.create({
    swipeableBackgroundComponent: {
        flex: 0.5,
        flexDirection: 'row',
        ...handleMargin(['auto', 0]),
        backgroundColor: 'transparent',
        borderRadius: 30,
        overflow: 'hidden'
    },
    leftSideWrapper: {
        width: getScreenWidth * 0.5,
        justifyContent: 'center',
        backgroundColor: colors.red
    },
    rightSideWrapper: {
        width: getScreenWidth * 0.5,
        justifyContent: 'center',
        backgroundColor: colors.green
    },
    label: {
        textAlign: 'center'
    }
})