// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Header from './Layouts/Header';

type Props = {
  history: any;
  children: any;
}

class App extends Component<Props> {

  static childContextTypes = {
    history: PropTypes.object
  };

  getChildContext() {
    return {
      history: this.props.history
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
