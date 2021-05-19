import { 
    FC, 
    useEffect,
    useState,
    useMemo 
} from 'react'

interface UsePokemonProps {
    query?: string,
    pageNumber: number
}

interface ResponseProps {
   count: number,
   next: string,
   previous: boolean,
   results: [] 
}

const LIMIT = 20

const usePokemon = ({
    query,
    pageNumber
}: UsePokemonProps) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokemon, setPokemon] = useState([])
    const [hasMore, setHasMore] = useState(false)

    const body = useMemo(() => {
        let body = JSON.stringify({
            limit: LIMIT,
            offset: LIMIT * pageNumber
        })
        if (query) body = JSON.stringify({ pokemon: query })
        return query
    }, [query, pageNumber])

    useEffect(() => {
        setLoading(true)
        setError(false)
        fetch(
            'https://pokeapi.co/api/v2/pokemon',
            { method: 'GET', body }
        )
        .then(res => res.json())
        .then((data: ResponseProps) => {
            setPokemon(prevPokemon => [...prevPokemon, ...data.results])
            setHasMore(data.next !== null)
            setLoading(false)
        })
        .catch(error => setError(true))
    }, [query, pageNumber])

    return { loading, error, hasMore, pokemon }
}

export default usePokemon
