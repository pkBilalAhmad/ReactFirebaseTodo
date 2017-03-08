import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const root = document.getElementById('root')
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/AppBar';
class Todo extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="React Todo"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}
injectTapEventPlugin();
ReactDOM.render(

  <MuiThemeProvider>
    <Todo />
  </MuiThemeProvider>
  ,
  root
)