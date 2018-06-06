import React, { Component } from 'react';
import './App.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import MatchList from './containers/matchList';
import MatchDetails from './containers/matchDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Cric-staz</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem active href="/matches">
                Matches
              </NavItem>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
        <Route path='/matches/:matchId' component={MatchDetails} />
        <Route exact path='/matches' component={MatchList} />
        <Route exact path='/' component={MatchList} />
      </div>
    );
  }
}

export default App;
