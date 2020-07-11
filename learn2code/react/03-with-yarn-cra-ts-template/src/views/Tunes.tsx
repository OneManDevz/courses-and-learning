import React, { useState } from 'react'
import TunesList from '../components/tunes/TunesList'
import TunesSearchForm from '../components/tunes/TunesSearchForm'

const Tunes: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [songs, setSongs] = useState([
		{ id: 1, artist: 'Breeeee', name: 'Keke' },
		{ id: 2, artist: 'Rare Americans', name: 'Hullabaloo' },
		{ id: 3, artist: 'Log', name: 'WoodStuck' },
	])

	const handleSearchFormSubmit = (data: string) => {
		const newSong = {
			id: Math.max(...songs.map((s) => s.id)) + 1,
			artist: data,
			name: data,
		}
		setSongs([...songs, newSong])
	}

	const handleInputChange = (data: string) => {
		setSearchQuery(data)
	}

	return (
		<article className="tunes">
			<h1>Tunes</h1>
			<TunesSearchForm
				onSearchFormSubmit={handleSearchFormSubmit}
				searchQuery={searchQuery}
				onInputChange={handleInputChange}
			/>
			<TunesList songs={songs} />
		</article>
	)
}

export default Tunes
