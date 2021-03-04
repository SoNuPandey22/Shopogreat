import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer } from './reducers/productReducers.js'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
	productList: productListReducer,
})

const initialState= {}//if something to be strore

const middleware = [thunk]

const store = createStore(
	reducer, 
	initialState, 
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store;