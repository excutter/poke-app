export type PokemonCellProp = {
    url: string,
    name: string
}

export type PokemonProp = {
    id: number,
    name: string,
    weight: number,
    height: number,
    types: PokemonTypeSlotProp[],
    sprites: SpritesProp,
    stats: StatsProp[]
}

export type PokemonTypeSlotProp = {
    slot: number,
    type: {
        name: 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice' | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug'
        | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy',
        url: string
    }
}

export type PokemonTypeProp = {
    type: 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice' | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug'
        | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy'
}

export type SpritesProp = {
    front_default: string,
    front_shiny: string,
    back_default: string,
    back_shiny: string
}

export type StatsProp = {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}