import cn from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Icon from './logo.svg'

import './Logo.css'

Logo.propTypes = {
	className: PropTypes.string,
	link: PropTypes.string,
}

Logo.defaultProps = {
	className: null,
	link: null,
}

export default function Logo({ className, link }) {
	const content = (
		<React.Fragment>
			<Icon className="Logo__icon" />
			Onstore
		</React.Fragment>
	)

	if (link) {
		return (
			<Link
				to={ link }
				className={ cn('Logo', className) }
			>
				{ content }
			</Link>
		)
	}

	return (
		<div className={ cn('Logo', className) }>
			{ content }
		</div>
	)
}
