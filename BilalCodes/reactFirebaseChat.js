import React, { Component } from 'react';
import ReactDOM from 'react-dom'
const root = document.getElementById('root')
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC1kiD1ivSYaN7ECi_7m4KNO9AXJ-dptck",
  authDomain: "react-todo-31aff.firebaseapp.com",
  databaseURL: "https://react-todo-31aff.firebaseio.com",
  storageBucket: "react-todo-31aff.appspot.com",
  messagingSenderId: "431679818811"
};
firebase.initializeApp(config);

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '', comments: '', items: [] }
  }
  changeUser(e) {
    this.setState({
      user: e.target.value
    });
  }
  changeComments(e) {
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
    if (this.state.user === '' || this.state.comments === '') {
      alert("Please Enter Your values first")
    } else {
      const db = firebase.database().ref("object")
      db.push(newItem)
      this.setState({
        user: '',
        comments: ''
      });
    }
    // this.setState((e) => ({
    //   items: e.items.concat(newItem),
    //   user : '',
    //   comments : ''
    // }));
  }
  componentDidMount() {
    const db = firebase.database().ref("object")
    db.on('child_added', (snap) => {
      console.log(snap.val())
      this.setState((e) => ({
        items: e.items.concat(snap.val())
      }));
      // this.state.items = snap.val()
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>
          <input type="text" value={this.state.user} onChange={this.changeUser.bind(this)} />
          <input type="text" value={this.state.comments} onChange={this.changeComments.bind(this)} />
          <button type="Submit">Submit</button>
        </form>
        <ol>
          {/*{
            
              <li key={this.state.items.id}>{this.state.items.user}{this.state.items.comments}</li>
            
          }*/}
          {
            this.state.items.map((i) => (
              <li key={i.id}>{i.user + " "}{i.comments}</li>
            ))
          }

        </ol>
      </div>
    );
  }
}

ReactDOM.render(
  <Todo />,
  root
)