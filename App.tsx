import 'react-native-gesture-handler'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStackNavigation from './srcs/stacks/MainStackNavigation'

import { Loader } from './srcs/components'

import {
  LoadingProvider
} from './srcs/context'

const App: FC = () => {
  return <LoadingProvider>
    <Loader />
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  </LoadingProvider>
}

export default App
