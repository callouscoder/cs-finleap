import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function locations(state = initialState.locations, action) {
  let currentLocations;

  switch (action.type) {

    case types.GET_LOCATIONS_INPROGRESS:
      currentLocations = {
        ...state,
        inProgress: true,
        isSuccess: false
      };

      return currentLocations;

    case types.GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        inProgress: false,
        isSuccess: true,
        items: action.locations[0]
      }


    case types.GET_LOCATIONS_FAILURE:
      currentLocations = {
        ...state,
        inProgress: false,
        isSuccess: false
      };

      return currentLocations;

    default:
      return state;
  }
}

