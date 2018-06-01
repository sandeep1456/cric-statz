import MatchDetails from '../../components/matchDetails';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    selectedMatch : state.selectedMatch
  }
}

export default connect(mapStateToProps)(MatchDetails);
