import React, {Component} from 'react';
import Match from '../match';
import {Grid, PageHeader, Button } from 'react-bootstrap';


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
      "t1Name" : "Synerzip",
      "t2Name" : "Infosys",
      "t1Score" : 180,
      "t2Score" : 156,
      "t1wickets" : 4,
      "t2wickets" : 10,
      "t1Overs" : 20,
      "t2Overs" : 20,
      "winner" : "Synerzip",
      "mom" : ""
    })
  }

  render(){
    return(
      <Grid className='matches-tab'>
        <PageHeader>
          Matches <Button className='pull-right' bsStyle='primary' onClick={this.saveMatch}> Add Match </Button>
        </PageHeader>

        <div>
          { this.props.matches.map((match, index) =>
            <Match {...match} index = {index+1} />
          )}
        </div>
      </Grid>
    );
  }
}

export default MatchList;
