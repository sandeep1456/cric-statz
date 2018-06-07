import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, Panel, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MatchDetails extends Component {
  componentDidMount(){
    // fetchMatchDetails(this.props.match.params.matchId);
  }

  render(){
    if(!this.props.matchData) {
      return <div>Please select a Match</div>
    }

    const battingDetails = [1,2,3,4,5,6,7,8,9,10];
    const bowlingDetails = [1,2,3,4,5];
    return (
      <Grid>
        <Row>
          <PageHeader>
            {this.props.matchData.t1Name} Vs {this.props.matchData.t2Name} <Link to='/matches' className='pull-right btn btn-primary'> Go back to Matches </Link>
          </PageHeader>
        </Row>
        <br/>
        <Row className="no-gutters">
          <Col md={2} className='inning-box list-group text-center'>
            <Row className='list-group-item active no-gutters'>
              <Col md={12}> First Inning </Col>
            </Row>
            <Row className='list-group-item  no-gutters'>
              <Col md={12}>
                <Row>
                  <Col md={12}><h4>{this.props.matchData.t1Name}</h4></Col>
                  <Col md={12}><h1>{this.props.matchData.t1Score}/{this.props.matchData.t1wickets}</h1></Col>
                  <Col md={12}>{this.props.matchData.t1Overs} overs</Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col md={2} className='inning-box list-group text-center '>
            <Row className='list-group-item active no-gutters'>
              <Col md={12}> Second Inning </Col>
            </Row>
            <Row className='list-group-item  no-gutters'>
              <Col md={12}>
                <Row>
                  <Col md={12}><h4>{this.props.matchData.t2Name}</h4></Col>
                  <Col md={12}><h1>{this.props.matchData.t2Score}/{this.props.matchData.t2wickets}</h1></Col>
                  <Col md={12}>{this.props.matchData.t2Overs} overs</Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col md={8} className='list-group'>
            <Row className='list-group-item no-gutters'>
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
            <Row className='list-group-item no-gutters'>
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
            <Row className='list-group-item no-gutters'>
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
            <Row className='list-group-item no-gutters'>
              <Col md={12}>
                <strong>Toss</strong> {' '}
                Won by {' '} <strong>{this.props.matchData.toss}</strong> {' '}
                and elected to {' '} <strong> {this.props.matchData.tossDecision}</strong> {' '} first.
              </Col>
            </Row>
          </Col>
        </Row>
        <br/>

        {/* batting details */}
        <Row>
          <Col md={6}>
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Synerzip Batting</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Runs</th>
                      <th>Balls</th>
                      <th>4s</th>
                      <th>6s</th>
                      <th>S/R</th>
                      <th>Dismissal</th>
                    </tr>
                  </thead>
                  <tbody>
                  {battingDetails.map((record, index) => {
                    return(
                      <tr key={index}>
                        <td>{record}</td>
                        <td>Bastman {record}</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                    )
                  })}
                  </tbody>
                </Table>
              </Panel.Body>
              <Panel.Footer>Extras: 0</Panel.Footer>
            </Panel>
          </Col>
        </Row>
        <br/>

        {/* bowling details */}
        <Row>
          <Col md={6}>
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Synerzip Bowling</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Overs</th>
                      <th>Runs</th>
                      <th>Wickets</th>
                      <th>Economy</th>
                    </tr>
                  </thead>
                  <tbody>
                  {bowlingDetails.map((record, index) => {
                    return(
                      <tr key={index}>
                        <td>{record}</td>
                        <td>Bowler {record}</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                    )
                  })}
                  </tbody>
                </Table>
              </Panel.Body>
              <Panel.Footer>Extras: 0</Panel.Footer>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default MatchDetails;
