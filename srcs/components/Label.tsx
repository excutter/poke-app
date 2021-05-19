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
    color?: string,
    autoWidth?: boolean
    margin?: [number],
    padding?: [number],
    children: JSX.Element
}

const Label: FC<LabelProps> = ({
    style,
    fontSize,
    color,
    autoWidth,
    margin,
    padding,
    children
}) => {

    const blockStyles = [
        styles.label,
        autoWidth && styles.autoWidth,
        margin && { ...handleMargin(margin) },
        padding && { ...handlePadding(padding) },
        fontSize && { fontSize }
    ]

    return <Text style={styles.label}>
        {children}
    </Text>
}

export default Label

const styles = StyleSheet.create({
    label: {
        width: '100%',
        paddingVertical: 5,
        color: colors.black,
    },
    white: {
        color: colors.white
    },
    autoWidth: { width: 'auto' }
})
