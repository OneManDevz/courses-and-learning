import React from 'react'
import TunesList from '../components/tunes/TunesList'
import TunesSearchForm from '../components/tunes/TunesSearchForm'

const Tunes: React.FC = () => {
	return (
		<article className="tunes">
			<h1>Tunes</h1>
			<TunesSearchForm />
			<TunesList />
		</article>
	)
}

export default Tunes
