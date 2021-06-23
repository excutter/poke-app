import AsyncStorage from '@react-native-async-storage/async-storage'
import { PokemonCellProp as Pokemon } from '../types/PokemonProps'

type FavouritesJSON = {
    [key: string]: Pokemon
}

type State = Pokemon[]

type Action =
    | { type: '@favourites/init', pokemon: State }
    | { type: '@favourites/add', pokemon: Pokemon }
    | { type: '@favourites/remove', pokemon: Pokemon }

const initialState: State = []

export const favouritesReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case '@favourites/init': return action.pokemon
        case '@favourites/add': return [...state, action.pokemon]
        case '@favourites/remove': return state.filter(pokemon => pokemon.id !== action.pokemon.id)
        default: return state
    }
}

export const initFavourites = (pokemon: Pokemon[]): Action => ({ type: '@favourites/init', pokemon })

export const addFavourite = (pokemon: Pokemon) => {
    return async (dispatch: ({}) => void) => {
        const json = {...await getPokemons(), [pokemon.id]: pokemon }
        await AsyncStorage.setItem('favouritesPokemon', JSON.stringify(json))
        dispatch({ type: '@favourites/add', pokemon })
    }
}

export const removeFavourite = (pokemon: Pokemon) => {
    return async (dispatch: ({}) => void) => {
        const json = { ...await getPokemons() }
        delete json[pokemon.id]
        await AsyncStorage.setItem('favouritesPokemon', JSON.stringify(json))
        dispatch({ type: '@favourites/remove', pokemon })
    }
}

const getPokemons = async (): Promise<FavouritesJSON> => {
    const item = await AsyncStorage.getItem('favouritesPokemon'),
        favourites: FavouritesJSON = item !== null ? JSON.parse(item) : {}

    return favourites
}