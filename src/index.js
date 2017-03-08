import React, { Component } from 'react';
import ReactDOM from 'react-dom'
const root = document.getElementById('root')
import createStore from 'redux'

class App extends Component {
  render() {
    return (
      <h1>Hello Pakistan</h1>
    );
  }
}


ReactDOM.render(
  <App/>,
  root
)