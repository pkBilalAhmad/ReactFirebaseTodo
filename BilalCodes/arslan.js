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

//  const db = firebase.database().ref('root')
//    db.on('value',(snap) => console.log(snap.val().firstName))

class Todo extends Component {
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
    var db = firebase.database().ref('root')
    db.push({
      newList: {
        firstName: this.state.user,
        lastName: this.state.comments,
        id: Date.now()
      }
    })
    this.setState((e) => ({
      user: '',
      comments: ''
    }));
    // this.setState((e)=>({
    //   items : this.state.list.concat(this.state.newItem)
    // }));
  }
  componentWillMount() {
    // const ul = document.getElementById('listRoot')
     var obj = []
    firebase.database().ref("root").on('child_added', (snap) => {
     obj.push(snap.val())
    })
    this.setState({
      items: obj
    })
  }
  render() {
   
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>
          <input type="text" onChange={this.changeUser} value={this.state.user} />
          <input type="text" onChange={this.changeComment} value={this.state.comments} />
          <button type="submit">Submit</button>
          
        </form>
        <ol>
          {
            this.state.items.map((i, index) => (
              <li key={i.newList.id}>{i.newList.firstName} </li>
            ))
          }
        </ol>


      </div>
    );
  }
}

ReactDOM.render(
  <Todo />
  , root
)