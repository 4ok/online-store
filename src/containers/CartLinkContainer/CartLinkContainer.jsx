import React from 'react'
import { connect } from 'react-redux'

import { CartLink } from '~/components'

import { pages } from '~/data'

function CartLinkContainer({ className, count, link }) {
	return (
		<CartLink
			{ ...{
				className,
				count,
				link,
			} }
		/>
	)
}

export default connect(state => ({
	count: state.cart.items.length,
	link: (state.router.location.pathname === pages.cart.path)
		? null
		: pages.cart.path,
}))(CartLinkContainer)
