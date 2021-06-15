import React, {
    FC,
    useEffect,
    useState
} from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackParamList } from '../../stacks/MainStackNavigation'
import { SwipeListView, Swipe } from 'react-native-swipe-list-view'

import { 
    PokemonCell,
    SwipeableBackgroundComponent
} from '../../components'

import { useLoadingUpdate } from '../../hooks'

import { PokemonCellProp } from '../../types/PokemonProps'
import styles from './styles/favouritesscreen.styles'
import { getScreenWidth } from '../../styles/functionStyles'

type FavouritesScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Pokedex'>

type FavouritesScreenProps = {
    navigation: FavouritesScreenNavigationProp
}

const LEFT_OPEN_VALUE = getScreenWidth * 0.5
const RIGHT_OPEN_VALUE = -getScreenWidth * 0.4

const FavouritesScreen: FC<FavouritesScreenProps> = ({ navigation }) => {

    const [favourites, setFavourites] = useState<PokemonCellProp[]>([])
    const { getItem } = useAsyncStorage('favouritesPokemon')
    const toggleLoader = useLoadingUpdate()

    useEffect(() => {
        toggleLoader()
        const getFavourites = async () => {
            const item = await getItem(),
                favourites: { [key: string]: PokemonCellProp } = item !== null ? JSON.parse(item) : {}

            setFavourites(Object.keys(favourites).map(key => favourites[key]))
        }
        getFavourites()
    }, [])

    const onPokemonPress = (pokemon: PokemonCellProp) => navigation.navigate('PokemonDetail', { pokemon })

    const onSwipeValueChange = swipeData => {
        const { key, value, direction } = swipeData
        if (value === RIGHT_OPEN_VALUE) {
            // Swipe Right to Left
            
        } else if (value === LEFT_OPEN_VALUE) {
            // Swipe Left to Right
            
        }
    }

    return <SwipeListView
        contentContainerStyle={styles.virtualizedList}
        leftOpenValue={LEFT_OPEN_VALUE}
        rightOpenValue={RIGHT_OPEN_VALUE}
        onSwipeValueChange={onSwipeValueChange}
        data={favourites}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }: { item: PokemonCellProp }) => (
            <PokemonCell
                index={parseInt(item.id)}
                pokemon={item}
                onPress={onPokemonPress} />
        )}
        renderHiddenItem={(data, rowMap) => (
            <SwipeableBackgroundComponent data={data} rowMap={rowMap} />
        )}/>
}

export default FavouritesScreen
