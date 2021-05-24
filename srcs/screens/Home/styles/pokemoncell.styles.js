import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    pokemonCell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 16
    },
    pokemonCellPair: { 
        marginLeft: 8,
        marginRight: 0
    },
    pokemonCellOdd: {
        marginLeft: 0,
        marginRight: 8
    },
})