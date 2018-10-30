import cn from 'classnames'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Icon, Badge } from 'antd'

import './CartLink.css'

CartLink.propTypes = {
	className: PropTypes.string,
	count: PropTypes.number,
	link: PropTypes.string,
}

CartLink.defaultProps = {
	className: null,
	link: null,
	count: 0,
}

export default function CartLink({ className, count, link }) {
	const content = (
		<React.Fragment>
			<Badge
				className="CartLink__badge"
				count={ count }
			>
				<Icon
					type="shopping-cart"
					heme="outlined"
					className="CartLink__icon"
				/>
			</Badge>
			<span className="CartLink__text">Cart</span>
		</React.Fragment>
	)

	if (link) {
		return (
			<Link

				className={ cn('CartLink', className) }
				to={ link }
			>
				{ content }
			</Link>
		)
	}

	return (
		<div className={ cn('CartLink', className) }>
			{ content }
		</div>
	)
}
