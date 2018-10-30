import cn from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'

import './Footer.css'

const COPYRIGHT_YEAR_FROM = 2018

Footer.propTypes = { className: PropTypes.string }

Footer.defaultProps = { className: null }

export default function Footer({ className }) {
	const copyright = () => {
		const yearFrom = COPYRIGHT_YEAR_FROM
		const yearTo = new Date().getFullYear()
		const years = (yearFrom === yearTo) ? yearFrom : `${ yearFrom }-${ yearTo }`

		return `Onstore © ${ years }`
	}

	return (
		<footer
			className={ cn('Footer', className) }
			role="contentinfo"
		>
			{ copyright() }
		</footer>
	)
}
