import React, { Component } from 'react';

class TodoList extends Component {
  
    render() {
          console.log(this.props.list)
        return (
            <li id="listRoot">User Name : = {this.props.list.firstName}  Comments : = {this.props.list.lastName}</li>
        );
    }
}
export default TodoList;