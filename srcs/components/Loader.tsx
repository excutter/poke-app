import React, { FC } from 'react'
import {
    ActivityIndicator,
    View,
    StyleSheet
} from 'react-native'

import {
    useLoading
} from '../hooks'

import { colors } from '../styles'

const Loader: FC = () => {

    const loading = useLoading()

    if (!loading) return null

    return <View style={styles.loaderContainer}>
        <ActivityIndicator
            color={colors.black}
            size="large" />
    </View>
}

export default Loader

const styles = StyleSheet.create({
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2
    }
})
