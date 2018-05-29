import React, {Component} from 'react';


class MatchList extends Component {
  constructor(props){
    super(props);
    this.saveMatch = this.saveMatch.bind(this);
  }

  saveMatch(e){
    this.props.addMatch({
      "mDate" : "2017-09-04",
      "mTime" : "9:00 AM",
      "tournament" : "Vintage Cup",
      "ground" : "Poona Club",
      "team1" : "Synerzip",
      "team2" : "Infosys",
      "t1Score" : 180,
      "t2score" : 156,
      "t1wickets" : 4,
      "t2wickets" : 10,
      "winner" : "Synerzip",
      "mom" : ""
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.saveMatch}> Add Match </button>
        <div>
          { this.props.matches.map((match, index) =>
            <div> Match {index+1} </div>
          )}
        </div>
      </div>
    );
  }
}

export default MatchList;
