import axios from 'axios'
import { takeEvery, put, call, all } from 'redux-saga/effects';

export const apiGet = async () => {
    try {
        const response = await axios.get('https://desafio2019.herokuapp.com/api/animals/')
        const data = await response.data
        return data

    } catch (err) {
        console.log(err)
    }
}

export const apiGetSingle = async (action) => {
    console.log('deu certo', action.payload)
}

function* getTodoList() {
    try {
        const response = yield call(apiGet);

        yield put({ type: 'SUCCESS_TODO_LIST', payload: { data: response } })
    } catch (err) {
        yield put({ type: 'FAILURE_TODO_LIST' })
    }
}


export default function* root() {
    yield all([
        takeEvery('REQUEST_TODO_LIST', getTodoList)
    ])

    yield all([
        takeEvery('REQUEST_SINGLE_ID', apiGetSingle)
    ])
}
