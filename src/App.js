import React, { Component } from 'react';

import {connect} from 'react-redux';

import Calculation from './components/calculation';

class App extends Component {
  render() {
      const {dispatch,countNum} = this.props;
      return (
      <div className="App">
          <Calculation getValue={countNum} dispatch={dispatch}></Calculation>
      </div>
    );
  }
}
function showData(state) {
    return {
        countNum:state.countReducer
    }
}
export default connect(showData)(App);

