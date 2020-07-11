import React from 'react'
import './TunesList.scss'
interface Props {
	songs: {
		id: number
		artist: string
		name: string
	}[]
}

const TunesList: React.FC<Props> = (props: Props) => {
	const { songs } = props
	return (
		<ul className="tunes-list">
			{songs.map((song) => (
				<li key={song.id}> {JSON.stringify(song)}</li>
			))}
		</ul>
	)
}

export default TunesList
