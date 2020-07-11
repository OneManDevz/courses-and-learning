import React, { useState, ChangeEvent, FormEvent } from 'react'
import './TunesSearchForm.scss'

interface Props {
	onSearchFormSubmit: (data: string) => void
}

const TunesSearchForm: React.FC<Props> = (props: Props) => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		props.onSearchFormSubmit(searchQuery)
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
