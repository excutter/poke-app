import 'react-native-gesture-handler'
import React, { 
  FC,
  useEffect
} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import RootStackNavigation from './srcs/stacks/RootStackNavigation'
import { Loader } from './srcs/components'

import { LoadingProvider } from './srcs/context'
import { useFavourites } from './srcs/hooks'

import store from './store'
import { initFavourites } from './srcs/reducers/favouritesReducer'

const App: FC = () => {

  const { favourites } = useFavourites()

  useEffect(() => {
    store.dispatch(initFavourites(favourites))
  }, [])

  return (
    <Provider store={store}>
      <LoadingProvider>
        <Loader />
        <NavigationContainer>
          <RootStackNavigation />
        </NavigationContainer>
      </LoadingProvider>
    </Provider>
  )
}

export default App
