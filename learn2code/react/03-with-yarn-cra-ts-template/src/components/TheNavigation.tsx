import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './TheNavigation.module.scss'
interface Props {}

const TheNavigation: React.FC<Props> = () => {
	return (
		<nav className={styles.navigation}>
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
