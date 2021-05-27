import React, { FC } from 'react'
import { 
    View, 
    Text, 
    VirtualizedList,
    StyleSheet
} from 'react-native'
import * as Progress from 'react-native-progress'
import { Label } from '../../components'
import { colors } from '../../styles'

import { 
    PokemonTypeProp, 
    StatsProp 
} from '../../types/PokemonProps'

type BaseStatsProps = {
    baseStats: StatsProp[],
    pokemonType: PokemonTypeProp
}

const BaseStats: FC<BaseStatsProps> = ({
    baseStats = [],
    pokemonType
}) => {
    return <View>
        <VirtualizedList
            style={styles.statsList}
            data={baseStats}
            getItemCount={(data: []) => data.length}
            getItem={(data, index) => data[index]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }: { item: StatsProp }) => <Stat {...item} type={pokemonType} />} />
    </View>
}

export default BaseStats

const Stat: FC<StatsProp & { type: PokemonTypeProp }> = ({
    base_stat,
    stat,
    type
}) => {
    return <View style={statStyles.statContainer}>
        <Label flex={0.7}>
            {stat.name}
        </Label>
        <Label
            flex={0.4}
            textAlign="center"
            bold>
            {base_stat}
        </Label>
        <Progress.Bar 
            style={statStyles.progressBar}
            color={colors.pokemon[type]}
            animated={true}
            progress={base_stat / 100} />
    </View>
}

const statStyles = StyleSheet.create({
    statContainer: {
        marginBottom: 8,
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    progressBar: { flex: 1 }
})

const styles = StyleSheet.create({
    statsList: { marginTop: 16 }
})
