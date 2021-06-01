import 'react-native-gesture-handler'
import React, { FC } from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import RootStackNavigation from './srcs/stacks/RootStackNavigation'

import { Loader } from './srcs/components'

import {
  LoadingProvider
} from './srcs/context'

LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
])

const App: FC = () => {
  return <LoadingProvider>
    <Loader />
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  </LoadingProvider>
}

export default App
