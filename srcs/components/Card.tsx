import React, { FC } from 'react'
import {
    TouchableOpacity, 
    View,
    StyleSheet, 
    GestureResponderEvent,
    StyleProp,
    ViewStyle
} from 'react-native'
import { colors } from '../styles'
import { handleMargin, handlePadding } from '../styles/functionStyles'

type CardProps = {
    style?: StyleProp<ViewStyle>,
    opacity?: number,
    onPress?: (event: GestureResponderEvent) => void,
    lightGray?: boolean,
    transparent?: boolean,
    padding?: number[] | number,
    margin?: number[] | number
}

const Card: FC<CardProps> = ({
    style,
    opacity = 0.2,
    onPress,
    lightGray,
    transparent,
    padding,
    margin,
    children 
}): JSX.Element => {
    const blockStyles: any = [
        styles.card,
        lightGray && styles.lightGray,
        transparent && styles.transparent,
        padding && { ...handlePadding(padding) },
        margin && { ...handleMargin(margin) },
        style
    ]

    if (onPress) 
        return <TouchableOpacity 
            activeOpacity={opacity}
            style={blockStyles}
            onPress={onPress}>
            {children}
        </TouchableOpacity>

    return <View style={blockStyles}>
        {children}
    </View>
}

export default Card

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 16,
        backgroundColor: colors.white,
        borderRadius: 30,
    },
    lightGray: { backgroundColor: colors.light_gray },
    transparent: { backgroundColor: 'transparent' },
})