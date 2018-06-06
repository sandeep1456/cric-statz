import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MatchDetails extends Component {
  componentDidMount(){
    // fetchMatchDetails(this.props.match.params.matchId);
  }

  render(){
    if(!this.props.matchData) {
      return <div>Please select a Match</div>
    }

    return (
      <Grid>
        <Row>
          <PageHeader>
            {this.props.matchData.t1Name} Vs {this.props.matchData.t2Name} <Link to='/matches' className='pull-right btn btn-primary'> Go back to Matches </Link>
          </PageHeader>
        </Row>
        <br/>
        <Row>
          <Col md={6} className='list-group'>
            <Row className='list-group-item'>
              <Col md={6}>
                <Row>
                  <Col md={4}><strong>Tournament</strong></Col>
                  <Col md={8}>{this.props.matchData.tournament}</Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={4}><strong>Ground</strong></Col>
                  <Col md={8}>{this.props.matchData.ground}</Col>
                </Row>
              </Col>
            </Row>
            <Row className='list-group-item'>
              <Col md={6}>
                <Row>
                  <Col md={4}><strong>Date</strong></Col>
                  <Col md={8}>{this.props.matchData.mDate}</Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={4}><strong>Timing</strong></Col>
                  <Col md={8}>{this.props.matchData.mTime}</Col>
                </Row>
              </Col>
            </Row>
            <Row className='list-group-item'>
              <Col md={6}>
                <Row>
                  <Col md={4}><strong>Result</strong></Col>
                  <Col md={8}>{this.props.match.winner === 'Synerzip' ? 'Won' : 'Lost'}</Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={4}><strong>MoM</strong></Col>
                  <Col md={8}>{this.props.matchData.mom}</Col>
                </Row>
              </Col>
            </Row>
            <Row className='list-group-item'>
              <Col md={12}>
                <strong>Toss</strong> {' '}
                Won by {' '} <strong>{this.props.matchData.toss}</strong> {' '}
                and elected to {' '} <strong> {this.props.matchData.tossDecision}</strong> {' '} first.
              </Col>
            </Row>
          </Col>

          <Col md={6}>
          </Col>
        </Row>

      </Grid>
    )
  }
}

export default MatchDetails;
