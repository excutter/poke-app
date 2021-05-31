import 'react-native-gesture-handler'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RootStackNavigation from './srcs/stacks/RootStackNavigation'

import { Loader } from './srcs/components'

import {
  LoadingProvider
} from './srcs/context'

const App: FC = () => {
  return <LoadingProvider>
    <Loader />
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  </LoadingProvider>
}

export default App
