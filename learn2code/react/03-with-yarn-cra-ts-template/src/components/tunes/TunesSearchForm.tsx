import React, { useState, ChangeEvent, FormEvent } from 'react'
import './TunesSearchForm.scss'

interface Props {}

const TunesSearchForm: React.FC<Props> = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// const newSong = {
		// 	id: Math.max(...songs.map((s) => s.id)) + 1,
		// 	artist: searchQuery,
		// 	name: searchQuery,
		// }

		// setSongs([...songs, newSong])
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={searchQuery}
					onChange={handleInput}
					className="search"
				/>
			</form>
		</div>
	)
}

export default TunesSearchForm
