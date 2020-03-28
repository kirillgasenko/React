import { takeEvery, put, call} from 'redux-saga/effects';
import { LOAD_DATA } from '../actions/index';
import axios from 'axios';
import { suceededData, failedData, showLoader, hideLoader } from '../actions/todoActions'

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}

function axiosData() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.data);
}

function* workerLoadData() {
    try {
        yield put(showLoader())
        const data = yield call(axiosData)
        yield put(suceededData(data));
        yield put(hideLoader())
    } catch (e) {
        yield put(failedData(e.message));
        yield put(hideLoader())
    }
}