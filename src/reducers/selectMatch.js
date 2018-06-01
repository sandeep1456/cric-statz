import {SELECT_MATCH} from '../actions';


const selectMatch = (state=null, action) => {
  switch (action.type) {
    case SELECT_MATCH:
      return action.payload
    default:
      return state;
  }
}

export default selectMatch;
