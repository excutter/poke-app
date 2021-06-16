import { 
    StyleSheet, 
    StatusBar,
    Platform
} from 'react-native'
import { colors } from '../../../styles'
import { getScreenWidth, handlePadding } from '../../../styles/functionStyles'

export default StyleSheet.create({
    ...Platform.select({
        ios: {
            detailContainer: {
                paddingTop: StatusBar.currentHeight + 48,
                flex: 1,
                backgroundColor: colors.white
            }
        },
        android: {
            detailContainer: {
                paddingTop: StatusBar.currentHeight,
                flex: 1,
                backgroundColor: colors.white
            }
        },
    }),
    pokemonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spritesContainer: { 
        flex: 1, 
        alignItems: 'flex-end' 
    },
    spritesList: { width: getScreenWidth * 0.35 },
    pokemonInfo: { 
        flex: 1,
        justifyContent: 'center'
    },
    infoContainer: {
        flex: 1,
        ...handlePadding([16, 16, 0]),
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0
    },
    loading: {
        flex: 1,
    }
})