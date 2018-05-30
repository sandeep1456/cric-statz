import React, { Component } from 'react';
import './App.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import MatchList from './containers/matchList';

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
              <NavItem active href="/">
                Matches
              </NavItem>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
        <MatchList />
      </div>
    );
  }
}

export default App;
