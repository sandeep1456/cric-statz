export const ADD_MATCH = "add_match";

export const addMatch = data => {
  return {
    type: ADD_MATCH,
    payload: data
  }
}
