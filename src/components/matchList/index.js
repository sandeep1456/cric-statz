import React, {Component} from 'react';
import Match from '../match';
import {Grid, PageHeader, Button, Table } from 'react-bootstrap';


class MatchList extends Component {
  constructor(props){
    super(props);
    this.saveMatch = this.saveMatch.bind(this);
  }

  saveMatch(e){
    this.props.addMatch({
      "id": 2,
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
      "winner" : "Infosys",
      "mom" : ""
    })
  }

  render(){
    return(
      <Grid className='matches-tab'>
        <PageHeader>
          Matches <Button className='pull-right' bsStyle='primary' onClick={this.saveMatch}> Add Match </Button>
        </PageHeader>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Vs</th>
              <th>Tournament</th>
              <th>Date</th>
              <th>Score</th>
              <th></th>
              <th>MoM</th>
            </tr>
          </thead>
          <tbody>
            { this.props.matches.map((match, index) =>
              <Match key={index} match={match} index = {index+1} />
            )}
          </tbody>
        </Table>
      </Grid>
    );
  }
}

export default MatchList;
