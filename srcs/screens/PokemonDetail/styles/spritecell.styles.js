import { StyleSheet } from 'react-native'
import { getScreenWidth } from '../../../styles/functionStyles'

export default StyleSheet.create({
    sprite: {
        flexGrow: 1,
        width: getScreenWidth * 0.35
    }
})