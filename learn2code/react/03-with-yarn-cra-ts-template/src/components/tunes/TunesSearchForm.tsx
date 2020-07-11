import React, { ChangeEvent, FormEvent } from 'react'
import './TunesSearchForm.scss'

interface Props {
	searchQuery: string
	onSearchFormSubmit: (data: string) => void
	onInputChange: (data: string) => void
}

const TunesSearchForm: React.FC<Props> = (props: Props) => {
	const { searchQuery, onSearchFormSubmit, onInputChange } = props

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		onInputChange(e.target.value)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSearchFormSubmit(searchQuery)
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
