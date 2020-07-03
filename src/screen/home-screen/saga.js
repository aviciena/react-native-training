import { put, takeLatest } from 'redux-saga/effects';

import { request } from '../../service/services';
import { GET_TRAINEESLIST, TRAINEESLIST_RESPONSE } from './actionTypes';

import MOCK_DATA from '../../mocks/MockData';

function* traineeList() {
    try {
        const { response } = yield request(
            'https://reactnative.dev/movies.json',
            'GET'
        );
        yield put({
            type: TRAINEESLIST_RESPONSE,
            payload: MOCK_DATA,
        });
    } catch (error) {
        yield put({
            type: TRAINEESLIST_RESPONSE,
            payload: error,
        });
    }
}

export function* traineesListWatcher() {
    yield takeLatest(GET_TRAINEESLIST, traineeList);
}