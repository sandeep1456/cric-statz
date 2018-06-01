import { combineReducers  } from 'redux';
import matches from './matches';
import selectMatch from './selectMatch';

export default combineReducers({
  matches : matches,
  selectedMatch : selectMatch
});
