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
				let iTunesSongs = response.data.results
					.filter((song: any) => song.kind === 'song')
					.map((song: any) => extractData(song))
				setSongs(iTunesSongs)
			})
	}

	const extractData = ({
		trackId: id,
		artistName: artist,
		previewUrl: audioFile,
		artworkUrl100: artwork,
		trackName: title,
		collectionName: album,
	}: any) => {
		return { id, artist, audioFile, artwork, title, album }
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
