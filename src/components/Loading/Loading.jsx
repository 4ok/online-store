import cn from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'

import { Spin } from 'antd'

import './Loading.css'

Catalog.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
}

Catalog.defaultProps = {
	className: null,
	size: 'large',
}

export default function Catalog({ className, size }) {

	return (
		<Spin
			size={ size }
			className={ cn('Loading', className) }
		/>
	)
}
