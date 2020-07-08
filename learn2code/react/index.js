class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state =  {
      show: 'Somali',
      shows: [
        {id: 1, title: 'Somali', descr: 'Lost human', nOfEps: 12},
        {id: 2, title: 'Rick and Morty', descr: 'You know this show', nOfEps: 20},
        {id: 3, title: 'Mr. Robot', descr: 'Sample description. Hacker', nOfEps: 11}
      ]
    }
  }

  onChange = (e) => {
    this.setState({
      show: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    const newShow = {
      id: this.state.shows[this.state.shows.length - 1].id + 1,
      title: this.state.show,
      descr: this.state.show,
      nOfEps: 1
    }

    this.setState((state) => { //state obsahuje aktualny stav state-u
      return { 
        shows: [ ...state.shows, newShow]
      }
    })
  }

  listOfShows = () => {
    return this.state.shows.map(show => (
      <li key={show.id}>
        {show.title}
        
      </li>
    ))
  }

  render() {
    const { show } = this.state

    return <div>
      <ul>{this.listOfShows()}</ul>
      {/*or <ul>{shows.map(show => {return <li key={show.id}>{show.title}</li>})}</ul>*/}
      <form className="add-new" onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={show} />
      </form>

      <p className="preview">{show}</p>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))