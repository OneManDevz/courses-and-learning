import React, { useState } from 'react'
import './TunesList.scss'
interface Props {}

const TunesList: React.FC<Props> = () => {
	const [songs, setSongs] = useState([
		{ id: 1, artist: 'Breeeee', name: 'Keke' },
		{ id: 2, artist: 'Rare Americans', name: 'Hullabaloo' },
		{ id: 3, artist: 'Log', name: 'WoodStuck' },
	])

	return (
		<ul className="tunes-list">
			{/* {songs.map((song) => (
				<li key={song.id}> {JSON.stringify(song)}</li>
			))} */}
		</ul>
	)
}

export default TunesList
