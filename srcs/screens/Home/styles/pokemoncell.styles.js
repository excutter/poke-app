import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

export default StyleSheet.create({
    pokemonCell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginVertical: 16,
        backgroundColor: colors.red
    },
    pokemonCellPair: { 
        marginLeft: 16,
        marginRight: 0
    },
    pokemonCellOdd: {
        marginLeft: 0,
        marginRight: 16
    },
})