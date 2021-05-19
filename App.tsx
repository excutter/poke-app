import 'react-native-gesture-handler'
import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStackNavigation from './srcs/stacks/MainStackNavigation'

const App: FC = () => {
  return <NavigationContainer>
    <MainStackNavigation />
  </NavigationContainer>
}

export default App
