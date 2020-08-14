import React, { ChangeEvent, FormEvent, useRef } from 'react'
import { debounce } from 'lodash-es'
import './TunesSearchForm.scss'

interface Props {
	onSearch: (query: string) => void
}

const TunesSearchForm: React.FC<Props> = (props: Props) => {
	const { onSearch } = props
	const searchInput = useRef<HTMLInputElement>(null)

	const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
		searchForMusic()
	}, 500)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		searchForMusic()
	}

	const searchForMusic = () => {
		let searchString = searchInput.current?.value
		if (searchString) onSearch(searchString)
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
