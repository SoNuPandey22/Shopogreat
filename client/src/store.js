import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { 
	productListReducer,  
	productDetailsReducer  
} from './reducers/productReducers.js'
import { composeWithDevTools,} from 'redux-devtools-extension'
import { CartReducer } from './reducers/cartReducer'

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
})

const initialState= {}//if something to be strore

const middleware = [thunk]

const store = createStore(
	reducer, 
	initialState, 
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store;