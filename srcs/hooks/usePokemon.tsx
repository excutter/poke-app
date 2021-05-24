import {
    useEffect,
    useState,
    useMemo
} from 'react'

interface UsePokemonProps {
    query?: string,
    pageNumber: number
}

interface PokemonResponse {
    url: string,
    name: string
}

interface ResponseProps {
    count: number,
    next: string,
    previous: boolean,
    results: PokemonResponse[]
}

interface UsePokemonStateProps {
    loading: boolean,
    error: boolean,
    hasMore: boolean,
    pokemon: PokemonResponse[]
}

const LIMIT = 20

const usePokemon = ({
    query,
    pageNumber
}: UsePokemonProps): UsePokemonStateProps => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokemon, setPokemon] = useState<PokemonResponse[]>([])
    const [hasMore, setHasMore] = useState(false)

    const params = useMemo(() => {
        let params = `?limit=${LIMIT}&offset=${LIMIT * pageNumber}`
        if (query) params = `/${query}`
        return params
    }, [query, pageNumber])

    useEffect(() => {
        setPokemon([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        fetch(`https://pokeapi.co/api/v2/pokemon${params}`)
            .then(res => res.json())
            .then((data: ResponseProps) => {
                console.log(`https://pokeapi.co/api/v2/pokemon${params}`)
                setPokemon(prevPokemon => [...new Set([...prevPokemon, ...data.results])])
                setHasMore(data.next !== null)
                setLoading(false)
            })
            .catch(error => setError(true))
    }, [query, pageNumber])

    return { loading, error, hasMore, pokemon }
}

export default usePokemon
