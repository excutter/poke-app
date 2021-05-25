import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'
import { getScreenHeight } from '../../../styles/functionStyles'

export default StyleSheet.create({
    detailContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    scrollView: {
        // flex: 1
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    spritesList: {
        flexGrow: 0.3
    },
    infoContainer: {
        flexGrow: 0.7,
        padding: 16,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0
    },
    loading: {
        flex: 1,
    }
})