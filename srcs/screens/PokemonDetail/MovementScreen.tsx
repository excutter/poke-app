import React, { 
    FC, 
    useMemo 
} from 'react'
import { ActivityIndicator } from 'react-native'

import { 
    Label,
    WentWrong
} from '../../components'

import { useFetch } from '../../hooks'

import { 
    MovementProp, 
    Movement 
} from '../../types/PokemonProps'

type MovementScreenProps = {
    movement: MovementProp
}

const MovementScreen: FC<MovementScreenProps> = (props) => {
    
    const state = useFetch({ query: props.movement.url })
    const movement = useMemo(() => {
        if (state.status !== 'success') return
        const movement = state.data as Movement
        return movement
    }, [state])

    if (state.status === 'loading')
        return <ActivityIndicator
            style={{ flex: 1 }}
            size="large"
            color="black" />

    if (state.status === 'error')
        return <WentWrong error={state.error} />
    
    return <>
        <Label>{movement?.effect_entries[0].effect}</Label>
        <Label 
            bold
            padding={[16, 0 ,0]}>
            Type
        </Label>
        <Label>{movement?.type.name}</Label>
        <Label
            bold
            padding={[16, 0, 0]}>
            Power
        </Label>
        <Label>{movement?.power || '--'}</Label>
        <Label
            bold
            padding={[16, 0, 0]}>
            PP
        </Label>
        <Label>{movement?.pp}</Label>
        <Label
            bold
            padding={[16, 0, 0]}>
            Generation
        </Label>
        <Label>{movement?.generation.name}</Label>
    </>
}

export default MovementScreen
