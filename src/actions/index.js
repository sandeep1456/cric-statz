export const ADD_MATCH = "ADD_MATCH";
export const SELECT_MATCH = "SELECT_MATCH";

export const addMatch = data => {
  return {
    type: ADD_MATCH,
    payload: data
  }
}

export const selectMatch = data => {
  return {
    type: SELECT_MATCH,
    payload: data
  }
}
