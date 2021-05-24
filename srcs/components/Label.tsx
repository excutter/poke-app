import React, { FC } from 'react'
import { 
    Text,
    StyleSheet, 
    StyleSheetProperties
} from 'react-native'
import { colors } from '../styles'
import { handleMargin, handlePadding } from '../styles/functionStyles'

interface LabelProps {
    style?: StyleSheetProperties,
    fontSize?: number,
    bold?: boolean,
    center?: boolean,
    color?: string,
    autoWidth?: boolean
    margin?: [number],
    padding?: [number],
}

const Label: FC<LabelProps> = ({
    style,
    fontSize,
    bold,
    center,
    color,
    autoWidth,
    margin,
    padding,
    children
}) => {

    const blockStyles: any = [
        styles.label,
        // autoWidth && styles.autoWidth,
        margin && { ...handleMargin(margin) },
        padding && { ...handlePadding(padding) },
        fontSize && { fontSize },
        bold && styles.bold,
        center && styles.center,
        style
    ]

    return <Text style={blockStyles}>
        {children}
    </Text>
}

export default Label

const styles = StyleSheet.create({
    label: {
        width: '100%',
        paddingVertical: 5,
        color: colors.black
    },
    white: {  color: colors.white },
    bold: { fontWeight: 'bold' },
    autoWidth: { width: 'auto' },
    center: { textAlign: 'center' }
})
