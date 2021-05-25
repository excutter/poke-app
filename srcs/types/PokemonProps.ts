export type PokemonCellProp = {
    url: string,
    name: string
}

export type PokemonProp = {
    id: number,
    name: string,
    weight: number,
    height: number,
    types: PokemonTypeProp[],
    sprites: SpritesProp
}

export type PokemonTypeProp = {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

export type SpritesProp = {
    front_default: string, 
    front_shiny: string, 
    back_default: string, 
    back_shiny: string
}