import React from 'react'
import logo from './assets/logo.svg'
import './App.scss'
import { Switch, Route, NavLink } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<header>
				<nav>
					<NavLink to="/" exact>Home</NavLink>
					<NavLink to="/itunes">iTunes</NavLink>
					<NavLink to="/about">About</NavLink>
				</nav>
			</header>
			<main className="content">
				<Switch>
					<Route path="/" render={() => <h1>Homepage</h1>} exact />
					<Route path="/itunes" render={() => <h1>iTunes</h1>} />
					<Route path="/about" render={() => <h1>About</h1>} />
				</Switch>
			</main>
		</div>
	)
}

export default App
