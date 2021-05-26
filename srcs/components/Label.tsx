import React, { FC } from 'react'
import { 
    Text,
    StyleSheet,
    StyleProp,
    TextStyle
} from 'react-native'
import { colors } from '../styles'
import { handleMargin, handlePadding } from '../styles/functionStyles'

interface LabelProps {
    style?: StyleProp<TextStyle>,
    fontSize?: number,
    flex?: number,
    bold?: boolean,
    textAlign?: 'center' | 'auto' | 'left' | 'right',
    white?: boolean,
    margin?: [number],
    padding?: [number],
}

const Label: FC<LabelProps> = ({
    style,
    flex,
    fontSize,
    bold,
    textAlign = 'auto',
    white,
    margin,
    padding,
    children
}) => {

    const blockStyles: any = [
        styles.label,
        margin && { ...handleMargin(margin) },
        padding && { ...handlePadding(padding) },
        fontSize && { fontSize },
        bold && styles.bold,
        textAlign && { textAlign },
        flex && { flex },
        white && styles.white,
        style
    ]

    return <Text style={blockStyles}>
        {children}
    </Text>
}

export default Label

const styles = StyleSheet.create({
    label: {
        // width: '100%',
        paddingVertical: 5,
        color: colors.black
    },
    white: {  color: colors.white },
    bold: { fontWeight: 'bold' },
    autoWidth: { width: 'auto' }
})
