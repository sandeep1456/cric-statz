import React, { Component } from 'react';

class MatchDetails extends Component {
  componentDidMount(){
    // fetchMatchDetails(this.props.match.params.matchId);
  }

  render(){
    if(!this.props.matchData) {
      return <div>Please select a Match</div>
    }

    return (
      <div>
        Match Details
        {this.props.matchData.t1Name} Vs {this.props.matchData.t2Name}
      </div>
    )
  }
}

export default MatchDetails;
