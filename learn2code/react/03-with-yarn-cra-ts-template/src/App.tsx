import React from 'react'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import TheNavigation from './components/TheNavigation'
import Home from './views/Home'
import About from './views/About'
import Tunes from './views/Tunes'

function App() {
	return (
		<div className="App">
			<header>
				<TheNavigation />
			</header>
			<main className="content">
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/tunes" component={Tunes} />
					<Route path="/about" component={About} />
				</Switch>
			</main>
		</div>
	)
}

export default App
