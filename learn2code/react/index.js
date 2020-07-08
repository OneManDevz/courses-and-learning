class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state =  {
      newTitle: '',
      newDescr: '',
      shows: [
        {id: 1, title: 'Somali', descr: 'Lost human', nOfEps: 12},
        {id: 2, title: 'Rick and Morty', descr: 'You know this show', nOfEps: 20},
        {id: 3, title: 'Mr. Robot', descr: 'Sample description. Hacker', nOfEps: 11}
      ]
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value
    })
  }

  handleSubmit = (e) => {
    if(e.key === 'Enter'){
      this.setState((state) => { //always current values of state
        //moved to setState function to get current values of this.state
        const newShow = {
          id: Math.max( ...state.shows.map(s => s.id)) + 1 ,
          title: state.newTitle,
          descr: state.newDescr,
          nOfEps: 1
        }
  
        return {
          shows: [ ...state.shows, newShow]
        }
      })
    }
  }

  listOfShows = () => {
    return this.state.shows.map(show => (
      <li key={show.id} className="dude">
        <a className="ctrl">x</a>
        <article className="">
          {show.title}
          <span>{show.descr}</span>
        </article>
        <input className="ctrl" type="number" value={show.nOfEps} />
      </li>
    ))
  }

  render() {
    const { newDescr, newTitle } = this.state

    return <div>
      <ul>{this.listOfShows()}</ul>
      <form className="add-new" onKeyPress={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={newTitle} title="newTitle" />
        <input type="text" onChange={this.handleChange} value={newDescr} title="newDescr" />
      </form>

      <p className="preview">{newTitle}<br />
        <small>{newDescr}</small>
      </p>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))