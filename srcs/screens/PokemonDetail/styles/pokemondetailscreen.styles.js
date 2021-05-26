import { StyleSheet, StatusBar } from 'react-native'
import { colors } from '../../../styles'
import { getScreenWidth } from '../../../styles/functionStyles'

export default StyleSheet.create({
    detailContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: colors.white
    },
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
        padding: 16,
        paddingTop: 32,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0
    },
    loading: {
        flex: 1,
    }
})