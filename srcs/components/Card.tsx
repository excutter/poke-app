import React, { FC } from 'react'
import {
    TouchableOpacity, 
    View,
    StyleSheet, 
    StyleSheetProperties,
    GestureResponderEvent
} from 'react-native'
import { colors } from '../styles'
import { handleMargin, handlePadding } from '../styles/functionStyles'

interface CardProps {
    style?: StyleSheetProperties,
    opacity?: number,
    onPress?: (event: GestureResponderEvent) => void,
    blue?: boolean,
    purple?: boolean,
    red?: boolean,
    green?: boolean,
    lightGray?: boolean,
    transparent?: boolean,
    padding?: number[] | number,
    margin?: number[] | number
}

const Card: FC<CardProps> = ({
    style,
    opacity = 0.2,
    onPress,
    blue,
    purple,
    red,
    green,
    lightGray,
    transparent,
    padding,
    margin,
    children 
}): JSX.Element => {
    const blockStyles: any = [
        styles.card,
        blue && styles.blue,
        purple && styles.purple,
        red && styles.red,
        green && styles.green,
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
        marginBottom: 16,
        padding: 16,
        backgroundColor: colors.white,
        borderRadius: 30,
    },
    blue: { backgroundColor: colors.blue },
    purple: { backgroundColor: colors.purple },
    red: { backgroundColor: colors.red },
    green: { backgroundColor: colors.green },
    lightGray: { backgroundColor: colors.light_gray },
    transparent: { backgroundColor: 'transparent' },
})