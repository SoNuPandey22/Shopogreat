//this is for handle the product for the product list
import { 
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST } from '../constants/productConstants.js'

export const productListReducer =(state = {products: []}, action) =>{
  switch (action.type) {
  	case PRODUCT_LIST_REQUEST: 
  	    return{ loading: true, products:[]}
  	case PRODUCT_LIST_SUCCESS :
  	   return { loading: false, products: action.payload }

    case PRODUCT_LIST_FAIL: 
       return { loading: false, error: action.payload}
    default: 
        return state
  } 
}

//for using it into the code add it to the store
export const productDetailsReducer =(
  state = {product: { reviews:[] }},
  action
  ) =>{
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST: 
        return { loading: true, ...state}
    case PRODUCT_DETAILS_SUCCESS :
       return { loading: false, product: action.payload }

    case PRODUCT_DETAILS_FAIL: 
       return { loading: false, error: action.payload }
    default: 
        return state
  } 
}
