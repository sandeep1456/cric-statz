import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

class Match extends Component {
  render(){
    return(
      <Row className='match'>
        <Col md={1}>Match {this.props.index}</Col>
        <Col md={2}>{this.props.t1Name} Vs {this.props.t2Name}</Col>
        <Col md={2}>{this.props.tournament} <br/> {this.props.ground}</Col>
        <Col md={1}>{this.props.mDate} <br/> {this.props.mTime}</Col>
        <Col md={1}>{this.props.t1Name} <br/> {this.props.t1Overs}</Col>
        <Col md={1}>{this.props.t1Score}/{this.props.t1wickets}</Col>
        <Col md={1}>{this.props.t2Name} <br/> {this.props.t2Overs}</Col>
        <Col md={1}>{this.props.t2Score}/{this.props.t2wickets}</Col>
        <Col md={1}>{this.props.t2Name === 'Synerzip' ? 'Won' : 'Lost'}</Col>
        <Col md={1}>MoM <br/> {this.props.mom}</Col>
      </Row>
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
  "t1Score" : propTypes.numeric,
  "t2Score" : propTypes.numeric,
  "t1wickets" : propTypes.numeric,
  "t2wickets" : propTypes.numeric,
  "t1Overs" : propTypes.numeric,
  "t2Overs" : propTypes.numeric,
  "winner" : propTypes.string,
  "mom" : propTypes.string
}

export default Match;
