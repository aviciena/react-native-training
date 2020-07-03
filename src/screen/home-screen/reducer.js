import { TRAINEESLIST_RESPONSE, SHOW_LOADING } from './actionTypes';

const intialState = {
    trainees: null,
    isLoading: true
};

const Reducer = (state = intialState, action) => {
    if (action.type === TRAINEESLIST_RESPONSE) {
        return { ...state, trainees: action.payload, isLoading: false };
    } else if (action.type === SHOW_LOADING) {
        return { ...state, isLoading: false };
    }

    return state;
};

export default Reducer;
