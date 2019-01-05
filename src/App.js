import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <>
        <Link to="/home">
          GoKite
        </Link>
        <Route path="/home" exact component={Home} />
      </>
    );
  }
}

export default App;
