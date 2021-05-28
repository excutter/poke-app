import React, { 
    FC,
    useEffect
} from 'react'
import { FlatList } from 'react-native'

import { Label } from '../../components'

import { useFetch } from '../../hooks'

type EvolutionProps = {

}

const Evolution: FC<EvolutionProps> = ({ }) => {

    const state = useFetch({ query: 'ability/65/'})

    useEffect(() => {
        if (state.status === 'success') {
            console.log(state.data)
        }
        if (state.status === 'error') {
            console.log(state.error)
        }
    }, [state])

    return <Label>Evolution</Label>
    return <FlatList /> 
}

export default Evolution
