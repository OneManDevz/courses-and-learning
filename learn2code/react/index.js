class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state =  {
      show: 'Somali'
    }
  }

  onChange = (e) => {
    this.setState({
      show: e.target.value
    })
  }

  render() {
    const { show } = this.state
    return <div>
      <form className="add-new">
        <input type="text" onChange={this.onChange} />
      </form>

      <p className="preview">{show}</p>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))