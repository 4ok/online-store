import React from 'react'
import { connect } from 'react-redux'

import { Cart } from '~/components'

import { cart as cartActions } from '~/actions'

const {
	sortItems: sortCartItems,
	removeItem: removeItemFromCart,
} = cartActions

function CartContainer({ items, sort, dispatch }) {
	return (
		<Cart { ...{
			items,
			sort,
			sortCartItems: params => dispatch(sortCartItems(params)),
			removeItemFromCart: params => dispatch(removeItemFromCart(params)),
		} }
		/>
	)
}

export default connect((state) => {
	const { cart: { items, sort } } = state

	return {
		sort,
		items,
	}
})(CartContainer)
