import React, { useState } from 'react'
import TunesList from '../components/tunes/TunesList'
import TunesSearchForm from '../components/tunes/TunesSearchForm'

const Tunes: React.FC = () => {
	const [songs, setSongs] = useState([])

	const handleSearchFormSubmit = (data: string) => {
		setSongs([])
	}

	return (
		<article className="tunes">
			<h1>Tunes</h1>
			<TunesSearchForm />
			<TunesList songs={songs} />
		</article>
	)
}

export default Tunes
