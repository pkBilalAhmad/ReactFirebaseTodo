



// function list() {  
//   myList = '';
//   var list = ['Bilal','Ahmad','Fazal','Khan','Ali'];
//   for(var i =0 ; i < list.length; i++){
//     myList = myList.push(list[i]) + '<br/>';
//   }
//   return myList;
// }
// console.log(list())
  

  


// ReactDOM.render(
//   List,
//   document.getElementById('root')
// )
// function TodoList() {
//   const todos = ['finish doc', 'submit pr', 'nag dan to review'];
//   return (
//     <ul>
//       {todos.map((message) => <Item key={message} message={message} />)}
//     </ul>
//   );
// }
// var MyCo = React.createClass({
//     getInitialState(){
//         return {name : this.props.name}
//     },
//     tChange(b) {
//         this.setState({
//             name : b.target.value
//         })
//     },
//     render(){        
//         return  <div>
//             <textarea value={this.state.name} onChange={this.tChange}/>
//             <h3>{this.state.name.length}</h3>
//         </div>
//     }
// })
// ReactDOM.render(
//     <MyCo name='Bilal'/>,
//     // React.createElement(myCo,{name : "bilal"}),
//     // <div>hello</div>,
//     document.getElementById('root')
// )