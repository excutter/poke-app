import React, {
    FC,
    useEffect,
    useState
} from 'react'
import { VirtualizedList } from 'react-native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParamList } from '../../stacks/MainStackNavigation'

import {
    PokemonCell
} from '../../components'

import { useLoadingUpdate } from '../../hooks'

import { PokemonCellProp } from '../../types/PokemonProps'
import styles from './styles/favouritesscreen.styles'

type FavouritesScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Pokedex'>

type FavouritesScreenProps = {
    navigation: FavouritesScreenNavigationProp
}

const FavouritesScreen: FC<FavouritesScreenProps> = ({ navigation }) => {

    const [favourites, setFavourites] = useState<PokemonCellProp[]>([])
    const { getItem } = useAsyncStorage('favouritesPokemon')
    const toggleLoader = useLoadingUpdate()

    useEffect(() => {
        const getFavourites = async () => {
            toggleLoader()
            const item = await getItem(),
                favourites: { [key: string]: PokemonCellProp } = item !== null ? JSON.parse(item) : {}

            setFavourites(Object.keys(favourites).map(key => favourites[key]))
            toggleLoader()
        }
        getFavourites()
    }, [])

    const onPokemonPress = (pokemon: PokemonCellProp) => navigation.navigate('PokemonDetail', { pokemon })

    return <VirtualizedList
        style={styles.virtualizedList}
        data={favourites}
        keyExtractor={(_, index) => index.toString()}
        getItemCount={(data: []) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item }: { item: PokemonCellProp }) => (
            <PokemonCell
                index={parseInt(item.id)}
                pokemon={item}
                onPress={onPokemonPress} />
        )} />
}

export default FavouritesScreen
