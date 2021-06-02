import React, { FC } from 'react'
import { 
    Text,
    StyleSheet,
    StyleProp,
    TextStyle,
    TextProps
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
    margin?: [number] | [number, number] | [number, number, number] | [number, number, number, number] | number,
    padding?: [number] | [number, number] | [number, number, number] | [number, number, number, number] | number,
}

const Label: FC<LabelProps & TextProps> = ({
    style,
    flex,
    fontSize,
    bold,
    textAlign = 'auto',
    white,
    margin,
    padding,
    children,
    ...props
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

    return <Text 
        {...props}
        style={blockStyles}>
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
