import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './TheNavigation.module.scss'

interface Props {
	brand?: string
}

const TheNavigation: React.FC<Props> = (props: Props) => {
	const { brand } = props

	return (
		<nav className={styles.navigation}>
			<span>
				<strong>{brand || 'secondary'}</strong> nav.
			</span>
			<NavLink to="/" activeClassName={styles.active} exact>
				Home
			</NavLink>
			<NavLink to="/tunes" activeClassName={styles.active}>
				Tunes
			</NavLink>
			<NavLink to="/about" activeClassName={styles.active}>
				About
			</NavLink>
		</nav>
	)
}

export default TheNavigation
