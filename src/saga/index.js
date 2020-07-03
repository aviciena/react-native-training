import { all } from 'redux-saga/effects';

import { traineesListWatcher } from '../screen/home-screen/saga'

// Redux Saga: Root Saga
export default function* rootSaga() {
    yield all([
        traineesListWatcher()
    ]);
}