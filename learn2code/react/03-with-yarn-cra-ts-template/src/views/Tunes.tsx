import React, { useState } from 'react'
import TunesList from '../components/tunes/TunesList'
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import axios from 'axios'

const Tunes: React.FC = () => {
	const [songs, setSongs] = useState([])

	const handleSearch = (query: string) => {
		axios
			.get(
				`https://itunes.apple.com/search
				?term=${encodeURI(query)}
				&entity=musicTrack
				&limit=5`
			)
			.then((response) => {
				console.log(response)
				setSongs(response.data.results)
			})
	}

	return (
		<article className="tunes">
			<h1>Tunes</h1>
			<TunesSearchForm onSearch={handleSearch} />
			<TunesList songs={songs} />
		</article>
	)
}

export default Tunes
