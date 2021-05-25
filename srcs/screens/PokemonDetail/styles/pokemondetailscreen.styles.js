import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

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
        // flexGrow: 0.3
        // height: 180
    },
    infoContainer: {
        flex: 1,
        padding: 16,
        paddingTop: 32,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0
    },
    loading: {
        flex: 1,
    }
})