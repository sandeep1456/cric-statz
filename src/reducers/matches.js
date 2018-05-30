import {ADD_MATCH} from '../actions';

let defaultState = [
  {
    "mDate" : "2018-05-02",
    "mTime" : "9:00 AM",
    "tournament" : "Pune IT Cup",
    "ground" : "Shinde High School",
    "t1Name" : "Synerzip",
    "t2Name" : "Zensar",
    "t1Score" : 180,
    "t2Score" : 156,
    "t1wickets" : 4,
    "t2wickets" : 10,
    "t1Overs" : 20,
    "t2Overs" : 20,
    "winner" : "Synerzip",
    "mom" : "Amey"
  }
];

const matches = (state=defaultState, action) => {
  switch (action.type) {
    case ADD_MATCH:
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
}

export default matches;
