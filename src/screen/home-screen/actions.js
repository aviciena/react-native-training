import { GET_TRAINEESLIST, TRAINEESLIST_RESPONSE } from './actionTypes';

export const getTraineesResponse = response => ({
  type: TRAINEESLIST_RESPONSE,
  payload: response,
});

export const getTraineesList = () => ({
  type: GET_TRAINEESLIST
});