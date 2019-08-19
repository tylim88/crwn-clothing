import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
// https://create-react-app.dev/docs/adding-images-fonts-and-files

import './header.style.scss'

const Header = props => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/'>
				SHOP
			</Link>{' '}
			<Link className='option' to='/'>
				CONTACT
			</Link>
		</div>
	</div>
)

export default Header
