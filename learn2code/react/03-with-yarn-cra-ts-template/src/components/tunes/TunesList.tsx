import React from 'react'
import { Song } from '../../types'
import './TunesList.scss'
import TunesSong from './TunesSong'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

interface Props {
	songs: Song[]
}

const TunesList: React.FC<Props> = (props: Props) => {
	const { songs } = props
	return (
		<TransitionGroup className="tunes-list" component="ul">
			{songs.map((song) => (
				<CSSTransition key={song.id} timeout={200} classNames="song">
					<li>
						<TunesSong song={song} />
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}

export default TunesList
