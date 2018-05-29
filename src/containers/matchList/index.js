import { connect } from 'react-redux';
import MatchList from '../../components/matchList';
import { addMatch } from '../../actions';

const mapStateToProps = state => ({
  matches : state.matches
});

const mapDispatchToProps = dispatch => ({
  addMatch : data => dispatch(addMatch(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchList);
