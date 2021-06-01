import React, { FC, useMemo } from 'react'
import { Label } from '../../components'

import { useFetch } from '../../hooks'

import { MovementProp, Movement } from '../../types/PokemonProps'

type MovementScreenProps = {
    movement: MovementProp
}

const MovementScreen: FC<MovementScreenProps> = (props) => {
    
    const state = useFetch({ query: props.movement.url })
    const movement = useMemo(() => {
        if (state.status !== 'success') return
        const movement = state.data as Movement
        console.log(movement)
        return movement
    }, [state])

    if (state.status === 'loading')
        return <Label>Loading</Label>

    if (state.status === 'error')
        return <Label>Error</Label>
    
    return <>

    </>
}

export default MovementScreen
