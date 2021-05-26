import {
    useEffect,
    useState
} from 'react'

import { PokemonProp, PokemonCellProp } from '../types/PokemonProps'

type UsePokemonProps = {
    query?: string,
    pageNumber?: number
}

type ResponseProps = {
    count: number,
    next: string,
    previous: boolean,
    results: PokemonCellProp[]
}

type UsePokemonStateProps = {
    loading: boolean,
    error: boolean,
    hasMore: boolean,
    pokemon: PokemonCellProp[],
    pokemonDetail: PokemonProp | null
}

const LIMIT = 20

const usePokemon = ({
    query,
    pageNumber = 0
}: UsePokemonProps): UsePokemonStateProps => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokemon, setPokemon] = useState<PokemonCellProp[]>([])
    const [pokemonDetail, setPokemonDetail] = useState<PokemonProp | null>(null) 
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        // setPokemon([])
        setPokemonDetail(null)
    }, [query])

    const fetchData = async (url: string) => {
        const response = await fetch(url)
        
        if (!response.ok) {
            setError(true)
            return
        } 

        const data = await response.json()
        return data
    }

    useEffect(() => {
        setLoading(true)
        setError(false)
        if (query)
            fetchData(`https://pokeapi.co/api/v2/pokemon/${query}`)
            .then((pokemonDetail: PokemonProp) => {
                setPokemonDetail(pokemonDetail)
                setLoading(false)
            })
        else
            fetchData(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${LIMIT * pageNumber}`)
            .then((data: ResponseProps) => {
                setPokemon(prevPokemon => [...new Set([...prevPokemon, ...data.results])])
                setHasMore(data.next !== null)
                setLoading(false)
            })
    }, [query, pageNumber])

    return { loading, error, hasMore, pokemon, pokemonDetail }
}

export default usePokemon
