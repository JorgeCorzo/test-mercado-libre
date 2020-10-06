import { all } from 'redux-saga/effects'
import productSaga from './products';
import detailSaga from './details';
import descriptionSaga from './description';

export default function* rootSaga(){
    yield all([
        productSaga(),
        detailSaga(),
        descriptionSaga()
    ])
}