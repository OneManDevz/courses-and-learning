import React, { useState } from 'react'
import TunesList from '../components/tunes/TunesList'
import TunesSearchForm from '../components/tunes/TunesSearchForm'

const Tunes: React.FC = () => {
	const [title, setTitle] = useState('Tunes')

	const handleSearchFormSubmit = (data: string) => {
		setTitle(data)
	}
	return (
		<article className="tunes">
			<h1>{title}</h1>
			<TunesSearchForm onSearchFormSubmit={handleSearchFormSubmit} />
			<TunesList />
		</article>
	)
}

export default Tunes
