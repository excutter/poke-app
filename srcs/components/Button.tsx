import React, { FC } from 'react'
import { 
    TouchableOpacity, 
    GestureResponderEvent, 
    StyleProp, 
    ViewStyle, 
    StyleSheet,
    StatusBar
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import Label from './Label'

import { colors } from '../styles'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { handleMargin } from '../styles/functionStyles'

type ButtonProps = {
    style?: StyleProp<ViewStyle>
    onPress: (event: GestureResponderEvent) => void,
    color: 'red' | 'black' | 'white'
}

type RoundButtonProps = ButtonProps & {
    icon: IconProp,
    size?: number,
    float?: boolean,
    direction?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
}

const RoundButton: FC<RoundButtonProps> = ({
    style,
    onPress,
    icon,
    size = 15,
    color,
    float,
    direction
}) => {
    const blockStyles = [
        styles.roundButton,
        color && styles[color],
        float && styles.floatButton,
        float && direction && styles[direction],
        style
    ]
    
    return <TouchableOpacity
        style={blockStyles}
        onPress={onPress}>
        <FontAwesomeIcon
            style={styles.iconButton}
            icon={icon}
            size={size} />
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
    topLeft: { top: StatusBar.currentHeight, left: 16 },
    topRight: { top: StatusBar.currentHeight, right: 16 },
    bottomLeft: { bottom: 0, right: 16 },
    bottomRight: { bottom: 0, right: 16 },
    iconButton: { color: colors.white },
    red: { backgroundColor: colors.red },
    white: { backgroundColor: colors.white },
    black: { backgroundColor: colors.black },
    whiteText: { color: colors.white },
    blackText: { color: colors.black }
})