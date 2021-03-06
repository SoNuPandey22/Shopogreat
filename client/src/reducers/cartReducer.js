import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstant.js'

export const CartReducer = (state = { cartItmes: []}, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
		   const item = action.payload
		   //existItem check if the cart item is present already in the cart
		   const existItem = state.cartItems.find(x => x.product === item.product)

		   if(existItem) {
		   	 return {
		   	 	...state,
		   	 	cartItems: state.cartItems.map(x =>
		   	 			    x.product === existItem.product ? 
		   	 			    item : x
		   	 			   )
		   	 }

		   } else {
		   	  return {
		   	  	...state,
		   	  	cartItems: [...state.cartItems, item]
		   	  }
		   }

		default:
		     return state
	}
}