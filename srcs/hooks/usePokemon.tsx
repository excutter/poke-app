import {
    useEffect,
    useState
} from 'react'

type UsePokemonProps = {
    query?: string,
    pageNumber?: number
}

type PokemonResponse = {
    url: string,
    name: string
}

type PokemonDetailResponse = {
    id: number,
    name: string,
    weight: number,
    height: number,
    types: { slot: number, type: { name: string, url: string }}[],
    sprites: { front_default: string, front_shiny: string, back_default: string, back_shiny: string }
}

type ResponseProps = {
    count: number,
    next: string,
    previous: boolean,
    results: PokemonResponse[]
}

type UsePokemonStateProps = {
    loading: boolean,
    error: boolean,
    hasMore: boolean,
    pokemon: PokemonResponse[],
    pokemonDetail: PokemonDetailResponse | null
}

const LIMIT = 20

const usePokemon = ({
    query,
    pageNumber = 0
}: UsePokemonProps): UsePokemonStateProps => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokemon, setPokemon] = useState<PokemonResponse[]>([])
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailResponse | null>(null) 
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setPokemon([])
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
            .then((pokemonDetail: PokemonDetailResponse) => {
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
