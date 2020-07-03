import { combineReducers } from 'redux';

import TraineesListReducer from '../screen/home-screen/reducer';

/** Combine all available reducers which will be accessible from all components */
export default combineReducers({
    traineesList: TraineesListReducer
});
