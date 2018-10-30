import cn from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'

import './Price.css'

const LOCALE = 'en-IN'

Price.propTypes = {
	price: PropTypes.number.isRequired,
	className: PropTypes.string,
}

Price.defaultProps = { className: null }

export default function Price({ className, price }) {
	return (
		<div className={ cn('Price', className) }>
			{ new Intl.NumberFormat(LOCALE).format(price) } €
		</div>
	)
}
