import React, { FC } from 'react'
import { 
    TouchableOpacity, 
    StyleProp, 
    ViewStyle, 
    StyleSheet,
    StatusBar,
    ButtonProps,
    Platform
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import Label from './Label'

import { colors } from '../styles'
import { handleMargin, handlePadding } from '../styles/functionStyles'

type Button = ButtonProps & {
    style?: StyleProp<ViewStyle>
    backgroundColor?: 'red' | 'black' | 'white' | 'yellow' | 'gray' | 'transparent',
    title?: string,
    margin?: [number] | [number, number] | [number, number, number] | [number, number, number, number] | number,
    padding?: [number] | [number, number] | [number, number, number] | [number, number, number, number] | number
}

type RoundButtonProps = Button & {
    icon: IconProp,
    color?: 'black' | 'white',
    size?: number,
    float?: boolean,
    direction?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight',
    width?: number | string,
    height?: number | string
}

const RoundButton: FC<RoundButtonProps> = ({
    style,
    onPress,
    icon,
    color,
    size = 15,
    backgroundColor,
    float,
    direction,
    margin,
    padding,
    width,
    height
}) => {
    const blockStyles: any = [
        styles.roundButton,
        backgroundColor && styles[backgroundColor],
        float && styles.floatButton,
        float && direction && styles[direction],
        width && { width },
        height && { height },
        margin && { ...handleMargin(margin) },
        padding && { ...handlePadding(padding) },
        style
    ]
    
    return <TouchableOpacity
        style={blockStyles}
        onPress={onPress}>
        <FontAwesomeIcon
            style={styles.iconButton}
            icon={icon}
            size={size}
            color={color} />
    </TouchableOpacity>
}

export default RoundButton

const styles = StyleSheet.create({
    roundButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    floatButton: { position: 'absolute', zIndex: 2 },
    ...Platform.select({
        ios: {
            topLeft: { top: StatusBar.currentHeight! + 48, left: 16 },
            topRight: { top: StatusBar.currentHeight! + 48, right: 16 },
        },
        default: {
            topLeft: { top: StatusBar.currentHeight, left: 16 },
            topRight: { top: StatusBar.currentHeight, right: 16 },
        }
    }),
    bottomLeft: { bottom: 0, right: 16 },
    bottomRight: { bottom: 0, right: 16 },
    iconButton: { color: colors.white },
    red: { backgroundColor: colors.red },
    white: { backgroundColor: colors.white },
    black: { backgroundColor: colors.black },
    gray: { backgroundColor: colors.light_gray },
    yellow: { backgroundColor: colors.yellow },
    transparent: { backgroundColor: 'transparent' },
    whiteText: { color: colors.white },
    blackText: { color: colors.black }
})