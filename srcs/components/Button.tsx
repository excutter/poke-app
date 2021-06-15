import React, { FC } from 'react'
import { 
    TouchableOpacity, 
    StyleProp, 
    ViewStyle, 
    StyleSheet,
    StatusBar,
    ButtonProps,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import Label from './Label'

import { colors } from '../styles'
import { handleMargin } from '../styles/functionStyles'

type Button = ButtonProps & {
    style?: StyleProp<ViewStyle>
    color: 'red' | 'black' | 'white' | 'yellow' | 'gray',
    title?: string
}

type RoundButtonProps = Button & {
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
    gray: { backgroundColor: colors.light_gray },
    yellow: { backgroundColor: colors.yellow },
    whiteText: { color: colors.white },
    blackText: { color: colors.black }
})