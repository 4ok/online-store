import React from 'react'
import { connect } from 'react-redux'

import { CatalogItem } from '~/components'

import { cart as cartActions } from '~/actions'

const {
	addItem: addItemToCart,
	removeItem: removeItemFromCart,
	changeItemCount: changeCartItemCount,
} = cartActions

function CatalogItemContainer({
	id,
	name,
	desc,
	price,
	images,
	rate,
	stock,
	countInCart,
	dispatch,
}) {
	return (
		<CatalogItem
			{ ...{
				id,
				name,
				desc,
				price,
				rate,
				stock,
				countInCart,
				images: {
					small: images.small,
					medium: images.medium,
				},
				addItemToCart: params => dispatch(addItemToCart(params)),
				removeItemFromCart: params => dispatch(removeItemFromCart(params)),
				changeCartItemCount: params => dispatch(changeCartItemCount(params)),
			} }
		/>
	)
}

export default connect((state, props) => ({
	// eslint-disable-next-line object-curly-newline
	countInCart: (state.cart.items.find(item => (item.id === props.id)) || {}).count || 0,
}))(CatalogItemContainer)
