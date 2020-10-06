import { put, call, takeEvery } from 'redux-saga/effects';

function* fetchProduct(action) {
    try {
        let response = {}
        let categories = []
        const URL = 'https://api.mercadolibre.com/sites/MLA/search?q=' + action.payload
        const res = yield call(fetch, URL)
        const data = yield call([res, 'json'])
        response.author = { name: 'Jorge Luis', lastname: 'Corzo Ruda' }
        categories = yield data.filters.filter(item => item.name === "Categories")
        if(categories.length > 0){
            response.categories = categories[0].values[0].path_from_root
        }else{
            response.categories = []
        }
        response.items = data.results
        yield put({ type: 'SUCCESS_GET_PRODUCTS', payload: response })
    } catch (error) {
        yield put({ type: 'FAIL_GET_PRODUCTS', error: error.message })
    }
}

function* productSaga() {
    yield takeEvery('START_GET_PRODUCTS', fetchProduct)
}

export default productSaga