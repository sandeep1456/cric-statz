import MatchDetails from '../../components/matchDetails';
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  //ownProps.match.params.matchId
  const index = _.findIndex(state.matches, { 'id': 1*ownProps.match.params.matchId });
  const matchData = index > -1 ? state.matches[index] : null;
  return {
    matchData
  }
}

export default connect(mapStateToProps)(MatchDetails);
