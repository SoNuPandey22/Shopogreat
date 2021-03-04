//this is for handle the product for the product list
import { 
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL} from '../constants/productConstants.js'

export const productListReducer =(state = {products: []}, action) =>{
  switch (action.type) {
  	case PRODUCT_LIST_REQUEST: 
  	    return{ lodaing: true, products:[]}
  	case PRODUCT_LIST_SUCCESS :
  	   return { lodaing: false, products: action.payload }

    case PRODUCT_LIST_FAIL: 
       return { lodaing: false, error: action.payload}
    default: 
        return state
  } 
}

//for using it into the code add it to the store