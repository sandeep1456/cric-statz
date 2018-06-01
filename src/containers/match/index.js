import { connect } from 'react-redux';
import Match from '../../components/match';
import { selectMatch } from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    selectMatch: data => dispatch(selectMatch(data))
  }
}

export default connect(null, mapDispatchToProps)(Match);
