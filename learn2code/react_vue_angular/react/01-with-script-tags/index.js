class App extends React.Component {
  constructor(props) {
    super(props)

    this.input = React.createRef()
    
    this.state =  {
      newTitle: '',
      newDescr: '',
      shows: []
    }
  }

  componentDidMount = () => {
    fetch('https://gist.githubusercontent.com/OneManDevz/b0783d0e6fc86de77d77263a6bf85a35/raw/69781d61030c867927fb63c1c5404950c0599192/test-fetch.json')
    .then(data => data.json())
    .then(response => {
      this.setState({ shows: response})
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value
    })
  }

  handleSubmit = (e) => {
    if(e.key === 'Enter' && this.state.newDescr && this.state.newTitle){
      this.setState((state) => { //always current values of state
        //moved to setState function to get current values of this.state
        const newShow = {
          id: Math.max( ...state.shows.map(s => s.id)) + 1 ,
          title: state.newTitle,
          descr: state.newDescr,
          numParam: 1
        }
  
        return {
          shows: [ ...state.shows, newShow]
        }
      })

      this.resetForm()
    }
  }

  resetForm = () => {
    this.setState({
      newTitle: '',
      newDescr: ''
    })

    this.input.current.focus()
  }

  handleRating = show => (e) => {
    const numParam = +e.target.value //conver to number

    this.setState((state) => { 
      return { 
        shows: state.shows.map(item => 
          item === show ? { ...show, numParam } : item  
        )
      }
    })
  }

  removeShow = show => {
    console.log('App -> show', show)
    this.setState((state) => { 
      return { 
        shows: state.shows.filter(item => item !== show)
      }
    })
  }

  listOfShows = () => {
    return this.state.shows.map(show => (
      <li key={show.id} className="dude">
        <a className="ctrl" onClick={ () => this.removeShow(show)}>x</a>
        <article className={show.numParam < 15 ? 'faded' : show.numParam > 68 ? 'gold' : '' }>
          {show.title}
          <span>{show.descr}</span>
        </article>
        <input className="ctrl" type="number" value={show.numParam} onChange={this.handleRating(show)} />
      </li>
    ))
  }

  render() {
    const { newDescr, newTitle } = this.state

    return <div>
      <ul>{this.listOfShows()}</ul>
      <form className="add-new" onKeyPress={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={newTitle} title="newTitle" ref={this.input} autoFocus />
        <input type="text" onChange={this.handleChange} value={newDescr} title="newDescr" />
      </form>

      <p className="preview">{newTitle}<br />
        <small>{newDescr}</small>
      </p>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))