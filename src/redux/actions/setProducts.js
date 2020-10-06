import * as types from '../types';

export function getProducts(products){
    return{
        type: types.START_GET_PRODUCTS,
        payload: products
    }
}