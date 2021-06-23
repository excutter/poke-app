import {
    useEffect,
    useState
} from 'react'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

import { PokemonCellProp as Pokemon } from '../types/PokemonProps'

type UseFavourites = Pokemon[]

const useFavourites = (): UseFavourites => {

    const { getItem } = useAsyncStorage('favouritesPokemon')
    const [favourites, setFavourites] = useState<Pokemon[]>([])

    useEffect(() => {
        const getFavourites = async () => {
            const item = await getItem(),
                favourites: { [key: string]: Pokemon } = item !== null ? JSON.parse(item) : {}

            setFavourites(Object.keys(favourites).map(key => favourites[key]))
        }
        getFavourites()
    }, [])

    return favourites
}

export default useFavourites