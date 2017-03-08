var MyR = React.createClass({
  componentWillReceiveProps: function (newProps) {
    this.setState({
      bil: newProps.defaultValue,
    });
  },
  getInitialState() {
    return {
      text: this.props.defaultValue
    }
  },
  Tc(ev) {
    this.setState({
      text: ev.target.value
    })
  },
  render() {
    return (
      <div>
        <h1>{this.props.defaultValue}</h1>
        <h2>{this.state.text.length}</h2>
        <textarea value={this.state.text} onChange={this.Tc} />
      </div>
    )
  }
})


var Tex = ReactDOM.render(
  // // <R/>,
  // React.DOM.div(null, <R text='Bilal Khan'/>),
  React.createElement(MyR, { defaultValue: 'Bilal ali' }),
  document.getElementById('root')
)
Tex.setState({bil : 'bhai bhai'})

