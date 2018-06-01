import React, { Component } from 'react';

class MatchDetails extends Component {
  render(){
    if(!this.props.selectedMatch) {
      return <div>Please select a Match</div>
    }

    return (
      <div>
        Match Details
        {this.props.selectedMatch.t1Name} Vs {this.props.selectedMatch.t2Name}
      </div>
    )
  }
}

export default MatchDetails;
