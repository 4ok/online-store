import cn from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'

import {
	MainMenuContainer,
	LogoContainer,
	CartLinkContainer,
} from '~/containers'

import './Header.css'

Header.propTypes = { className: PropTypes.string }

Header.defaultProps = { className: null }

export default function Header({ className }) {
	return (
		<header
			className={ cn('Header', className) }
			role="banner"
		>
			<div className="Header__inner">
				<LogoContainer className="Header__logo" />
				<MainMenuContainer className="Header__menu" />
				<CartLinkContainer className="Header__cart" />
			</div>
		</header>
	)
}
