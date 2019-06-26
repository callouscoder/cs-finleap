import _ from 'lodash';
import axios from 'axios';
import * as types from '../constants/actionTypes';

const CLIENT_ID = 'FQTSQTH1G3L2JJ531YVOM5OSROWNRY3BR3B1SB4ON2O4E2HS';
const CLIENT_SECRET = '41SQ3EOINTHXGALQKU33TGJLTDNV43BLTIPCHQD34SGB4C2N';

export const getLocations = address => {
  return (dispatch) => {
    let locations = [];
    const url = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&query=lunch&near=${address || 'Berlin'}&v=20170801&limit=3`;
    
    dispatch({type: types.GET_LOCATIONS_INPROGRESS, locations});

    axios.get(url)
      .then((res) => {        
        if (res.status === 200) {
          locations.push(_.get(res, 'data', []));
          dispatch({type: types.GET_LOCATIONS_SUCCESS, locations});
        } else {
          dispatch({type: types.GET_LOCATIONS_FAILURE, locations});
        }

      })
      .catch((error) => {
        dispatch({type: types.GET_LOCATIONS_FAILURE, error});
      })
  }
}
