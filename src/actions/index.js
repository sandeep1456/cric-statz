export const ADD_MATCH = "ADD_MATCH";

export const addMatch = data => {
  return {
    type: ADD_MATCH,
    payload: data
  }
}
