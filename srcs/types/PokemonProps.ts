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
    stats: StatsProp[],
    abilities: { ability: AbilityProp }[],
    moves: { move: MovementProp }[]
}

export type PokemonTypeSlotProp = {
    slot: number,
    type: {
        name: PokemonTypeProp,
        url: string
    }
}

export type PokemonTypeProp = 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice' | 'fighting' | 'poison' | 'ground' |
    'flying' | 'psychic' | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy'

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

export type AbilityProp = {
    name: string,
    url: string
}

export type MovementProp = {
    name: string,
    url: string
}

export type Movement = {
    effect_entries: [{ effect: string }],
    generation: { name: string, url: string },
    power: number | null,
    pp: number,
    type: { name: string, url: string },
}