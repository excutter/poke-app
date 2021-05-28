import {
    useEffect,
    useRef,
    useReducer
} from 'react'

type UseFetchProps = {
    query: string
}

type StateProps =
    | { status: 'empty' }
    | { status: 'loading' }
    | { status: 'error', error: string }
    | { status: 'success', data: {} }

type ActionProp =
    | { type: 'request' }
    | { type: 'success', data: {} }
    | { type: 'failure', error: string }

const initialState: StateProps = {
    status: 'empty'
}

const reducer = (state: StateProps, action: ActionProp): StateProps => {
    switch (action.type) {
        case 'request': return { status: 'loading' }
        case 'success': return { status: 'success', data: action.data }
        case 'failure': return { status: 'error', error: action.error }
        default: return state
    }
}

const useFetch = ({ query }: UseFetchProps): StateProps => {

    const [state, dispatch] = useReducer(reducer, initialState)
    // const cache = useRef<any>()

    useEffect(() => {
        let cancelRequest = false
        if (!query) return

        const fetchData = async () => {
            dispatch({ type: 'request' })

            // if (cache.current[query]) {
            //     const data = cache.current[query]
            //     dispatch({ type: 'success', data })
            // } else {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/${query}`),
                    data = await response.json()
                // cache.current[query] = data
                if (cancelRequest) return
                dispatch({ type: 'success', data: data })
            } catch (error) {
                if (cancelRequest) return
                dispatch({ type: 'failure', error: error.toString() })
            }
            // }

        }

        fetchData()

        return () => { cancelRequest = true }
    }, [query])

    return state
}

export default useFetch
