import React, { FC } from 'react'
import { 
    StyleSheet, 
    Image 
} from 'react-native'

import Card from './Card'
import Label from './Label'

import ErrorImg from '../../assets/error.png'
import { getScreenHeight } from '../styles/functionStyles'

type WentWrongProps = { error?: string }

const WentWrong: FC<WentWrongProps> = ({ error }) => {
    return <Card style={styles.wentWrongContainer}>
        <Image 
            style={styles.image}
            source={ErrorImg}
            resizeMode="contain" /> 
        <Label bold>Error!</Label>
        <Label textAlign="center">{error}</Label>
    </Card>
}

export default WentWrong

const styles = StyleSheet.create({
    wentWrongContainer: {
        height: getScreenHeight * 0.85,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 0.5,
    }
})