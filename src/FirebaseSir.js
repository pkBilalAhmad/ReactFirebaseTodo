import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
var root = document.getElementById('root');
import TodoList from './todolist'
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC1kiD1ivSYaN7ECi_7m4KNO9AXJ-dptck",
  authDomain: "react-todo-31aff.firebaseapp.com",
  databaseURL: "https://react-todo-31aff.firebaseio.com",
  storageBucket: "react-todo-31aff.appspot.com",
  messagingSenderId: "431679818811"
};
firebase.initializeApp(config);

class Todo extends Component {
  list = []
  //  ndsa ="dsadsa";
  constructor(props) {
    super(props);
    this.state = { user: '', comments: '', items: [] }
    this.changeUser = this.changeUser.bind(this);
    this.changeComment = this.changeComment.bind(this);
  }
  changeUser(e) {
    this.setState({
      user: e.target.value
    });
  }
  changeComment(e) {
    this.setState({
      comments: e.target.value
    });
  }
  submit(e) {
    e.preventDefault()
    const newItem = {
      user: this.state.user,
      comments: this.state.comments,
      id: Date.now()
    }
    this.setState((e) => ({
      user: '',
      comments: ''
    }));
    var date = firebase.database().ref('root')
    date.push({
      newList: {
        firstName: this.state.user,
        lastName: this.state.comments
      }
    })
    firebase.database().ref('root').on('child_added', (snap) => {
      this.list.push(snap.val().newList);
      console.log(this.list)
    })

  }
  rem(index) {
    const items = this.state.items;
    items.splice(index, 1)
    this.setState({
      items
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>
          <input type="text" onChange={this.changeUser} value={this.state.user} />
          <input type="text" onChange={this.changeComment} value={this.state.comments} />
          <button type="submit">Submit</button>
        </form>
        {
          this.list.map((i, index) => (
            <TodoList list={i} key={i.id} index={index} delet={this.rem.bind(this)} />
          ))
        }


      </div>
    );
  }
}

ReactDOM.render(
  <Todo />
  , root
)