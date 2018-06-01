import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Label } from 'react-bootstrap';


class Match extends Component {

  selectMatch(matchData){
    this.props.selectMatch(matchData);
  }

  render(){
    let rowClass = 'match ' + (this.props.match.winner !== 'Synerzip' ? 'lost' : '');
    return(
      <tr className={rowClass}>
        <td>
          Match {this.props.index} <br/>
          {this.props.match.winner === 'Synerzip' ? <Label bsStyle="success">Won</Label>: <Label bsStyle="warning">Lost</Label>}
          {' '} <a onClick={(e)=>this.selectMatch(this.props.match)}>Details</a>
        </td>
        <td className='h3'>{this.props.match.t1Name === 'Synerzip' ? this.props.match.t2Name : this.props.match.t1Name }</td>
        <td><b>{this.props.match.tournament}</b> <br/> {this.props.match.ground}</td>
        <td>{this.props.match.mDate} <br/> {this.props.match.mTime}</td>
        <td className='score'>
          <div className='score-left'><strong>{this.props.match.t1Name}</strong> <br/> {this.props.match.t1Overs} Overs</div>
          <div className='score-right'>{this.props.match.t1Score}/{this.props.match.t1wickets}</div>
        </td>
        <td className='score'>
          <div className='score-left'><strong>{this.props.match.t2Name}</strong> <br/> {this.props.match.t2Overs} Overs</div>
          <div className='score-right'>{this.props.match.t2Score}/{this.props.match.t2wickets}</div>
        </td>
        <td> {this.props.match.mom ? <strong>{this.props.match.mom}</strong> : ''}</td>
      </tr>
    );
  }
}

Match.propTypes = {
  "mDate" : propTypes.string,
  "mTime" : propTypes.string,
  "tournament" : propTypes.string,
  "ground" : propTypes.string,
  "t1Name" : propTypes.string,
  "t2Name" : propTypes.string,
  "t1Score" : propTypes.number,
  "t2Score" : propTypes.number,
  "t1wickets" : propTypes.number,
  "t2wickets" : propTypes.number,
  "t1Overs" : propTypes.number,
  "t2Overs" : propTypes.number,
  "winner" : propTypes.string,
  "mom" : propTypes.string
}

export default Match;
