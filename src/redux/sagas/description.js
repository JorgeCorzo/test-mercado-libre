import { put, call, takeEvery } from 'redux-saga/effects';

function* fetchDescription(action) {
    try {
        let response = {}
        const URL = 'https://api.mercadolibre.com/items/' + action.payload + '/description'
        const res = yield call(fetch, URL)
        const data = yield call([res, 'json'])
        response.author = { name: 'Jorge Luis', lastname: 'Corzo Ruda' }
        response.items = data
        yield put({ type: 'SUCCESS_GET_DESCRIPTION', payload: response })
    } catch (error) {
        yield put({ type: 'FAIL_GET_DESCRIPTION', error: error.message })
    }
}

function* descriptionSaga() {
    yield takeEvery('START_GET_DESCRIPTION', fetchDescription)
}

export default descriptionSaga