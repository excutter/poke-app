import { PokemonCellProp as Pokemon } from '../types/PokemonProps'

type State = Pokemon[]
    // | Pokemon

type Action =
    | { type: '@favourites/init', pokemon: State }
    | { type: '@favourites/getAll', favourites: State }
    | { type: '@favourites/get', pokemon: Pokemon }
    | { type: '@favourites/add', pokemon: Pokemon }
    | { type: '@favourites/remove', pokemon: Pokemon }

const initialState: State = []

export const favouritesReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case '@favourites/init': return action.pokemon
        case '@favourites/getAll': return state
        case '@favourites/get': return state
        case '@favourites/add': return [...state, action.pokemon]
        case '@favourites/remove': return state.filter(pokemon => pokemon.id !== action.pokemon.id)
        default: return state
    }
}

export const initFavourites = (pokemon: Pokemon[]): Action => ({ type: '@favourites/init', pokemon })

export const addFavourite = (pokemon: Pokemon): Action => ({ type: '@favourites/add', pokemon })

// export const addFavourite = () => {
//     return async (dispatch) => {
//         return dispatch({ type: '@favourites/add', pokemon })
//     }
// }

export const removeFavourite = (pokemon: Pokemon): Action => ({ type: '@favourites/remove', pokemon })