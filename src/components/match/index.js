import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Label } from 'react-bootstrap';


class Match extends Component {
  render(){
    let rowClass = 'match ' + (this.props.winner !== 'Synerzip' ? 'lost' : '');
    return(
      <tr className={rowClass}>
        <td>
          Match {this.props.index} <br/>
          {this.props.winner === 'Synerzip' ? <Label bsStyle="success">Won</Label>: <Label bsStyle="warning">Lost</Label>}
          {' '} <a>Details</a>
        </td>
        <td className='h3'>{this.props.t1Name === 'Synerzip' ? this.props.t2Name : this.props.t1Name }</td>
        <td><b>{this.props.tournament}</b> <br/> {this.props.ground}</td>
        <td>{this.props.mDate} <br/> {this.props.mTime}</td>
        <td className='score'>
          <div className='score-left'><strong>{this.props.t1Name}</strong> <br/> {this.props.t1Overs} Overs</div>
          <div className='score-right'>{this.props.t1Score}/{this.props.t1wickets}</div>
        </td>
        <td className='score'>
          <div className='score-left'><strong>{this.props.t2Name}</strong> <br/> {this.props.t2Overs} Overs</div>
          <div className='score-right'>{this.props.t2Score}/{this.props.t2wickets}</div>
        </td>
        <td> {this.props.mom ? <strong>{this.props.mom}</strong> : ''}</td>
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
