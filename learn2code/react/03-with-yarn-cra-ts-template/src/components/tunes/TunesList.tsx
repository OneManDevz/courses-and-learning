import React from 'react'
import { Song } from '../../types'
import './TunesList.scss'
import TunesSong from './TunesSong'

interface Props {
	songs: Song[]
}

const TunesList: React.FC<Props> = (props: Props) => {
	const { songs } = props
	return (
		<ul className="tunes-list">
			{songs.map((song) => (
				<li key={song.id}>
					<TunesSong song={song} />
				</li>
			))}
		</ul>
	)
}

export default TunesList
