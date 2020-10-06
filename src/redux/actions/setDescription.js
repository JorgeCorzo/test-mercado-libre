import * as types from '../types';

export function getDescription(description){
    return{
        type: types.START_GET_DESCRIPTION,
        payload: description
    }
}