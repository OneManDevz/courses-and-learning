import React, { ChangeEvent, FormEvent, useRef } from 'react'
import { debounce } from 'lodash-es'
import './TunesSearchForm.scss'

interface Props {}

const TunesSearchForm: React.FC<Props> = () => {
	const searchInput = useRef<HTMLInputElement>(null)

	const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
		searchForMusic()
	}, 500)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		searchForMusic()
	}

	const searchForMusic = () => {
		console.log(searchInput.current?.value)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={handleInput}
					className="search"
					ref={searchInput}
					autoFocus
				/>
			</form>
		</div>
	)
}

export default TunesSearchForm
