import { put, call, takeEvery } from 'redux-saga/effects';

function* fetchDetails(action) {
    try {
        let response = {}
        const URL = 'https://api.mercadolibre.com/items/' + action.payload
        const res = yield call(fetch, URL)
        const data = yield call([res, 'json'])
        response.author = { name: 'Jorge Luis', lastname: 'Corzo Ruda' }
        response.items = data
        yield put({ type: 'SUCCESS_GET_DETAILS', payload: response })
    } catch (error) {
        yield put({ type: 'FAIL_GET_DETAILS', error: error.message })
    }
}

function* detailSaga() {
    yield takeEvery('START_GET_DETAILS', fetchDetails)
}

export default detailSaga