import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { favouritesReducer } from './srcs/reducers'

const store = createStore(
    favouritesReducer, 
    composeWithDevTools(applyMiddleware(thunk))
)
export default store
