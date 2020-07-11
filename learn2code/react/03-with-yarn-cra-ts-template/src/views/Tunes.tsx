import React, { useState, ChangeEvent, FormEvent } from 'react'

const Tunes: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [songs, setSongs] = useState([
		{ id: 1, artist: 'Breeeee', name: 'Keke' },
		{ id: 2, artist: 'Rare Americans', name: 'Hullabaloo' },
		{ id: 3, artist: 'Log', name: 'WoodStuck' },
	])

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newSong = {
			id: Math.max(...songs.map((s) => s.id)) + 1,
			artist: searchQuery,
			name: searchQuery,
		}

		setSongs([...songs, newSong])
	}

	return (
		<div className="tunes">
			<h1>Tunes</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={searchQuery} onChange={handleInput} />
			</form>

			<ul>
				{songs.map((song) => (
					<li key={song.id}>{JSON.stringify(song)}</li>
				))}
			</ul>
		</div>
	)
}

export default Tunes
