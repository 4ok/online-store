import cn from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'

import './Content.css'

Content.propTypes = {
	children: PropTypes.element.isRequired,
	className: PropTypes.string,
}

Content.defaultProps = { className: null }

export default function Content({ className, children }) {
	return (
		<main
			className={ cn(className, 'Content') }
			role="main"
		>
			{ children }
		</main>
	)
}
