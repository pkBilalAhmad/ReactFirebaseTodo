class TodoList extends Component {
    render() {
        return (
            <div id="listRoot">
                <div>{this.props.list.user}</div>
                <div>{this.props.list.comments}</div>
            </div>
        );
    }
}
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
            comments: this.state.comments
        }
        this.setState((e) => ({
            items: e.items.concat(newItem)
        }));
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
                    this.props.items.map((i) => (
                        <TodoList list={i} key={i}/>
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