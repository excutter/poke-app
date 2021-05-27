import React, { FC } from "react"
import { 
    View,
    VirtualizedList,
    StyleSheet
} from "react-native"

import PokemonType from './PokemonType'

import { PokemonTypeSlotProp } from '../types/PokemonProps'
import { handlePadding } from "../styles/functionStyles"

type PokemonTypesProps = {
    types: PokemonTypeSlotProp[]
}

const PokemonTypes: FC<PokemonTypesProps> = ({
    types
}) => {
  return <View style={styles.typesContainer}>
      <VirtualizedList
      style={styles.typesList}
      contentContainerStyle={styles.typesListContainer}
      horizontal={true}
      scrollEnabled={false}
      data={types}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }: { item: PokemonTypeSlotProp }) => <PokemonType type={item} /> }
      getItemCount={(data: []) => data.length}
      getItem={(data, index) => data[index]} />
  </View>
}

export default PokemonTypes

const styles = StyleSheet.create({
    typesContainer: {},
    typesList: {},
    typesListContainer: {
        flex: 1,
        ...handlePadding([0, 0]),
        alignItems: 'center'
    }
})

