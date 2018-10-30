import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CartItemQuantity } from '~/components'

import { cart as cartActions } from '~/actions'

const { changeItemCount: changeCartItemCount } = cartActions

CartItemQuantityContainer.propTypes = { dispatch: PropTypes.func.isRequired }

function CartItemQuantityContainer({
	className,
	itemId,
	countInCart,
	defaultValue,
	maxValue,
	onChange,
	dispatch,
}) {
	return (
		<CartItemQuantity
			{ ...{
				className,
				itemId,
				countInCart,
				defaultValue,
				maxValue,
				onChange,
				changeCartItemCount: params => dispatch(changeCartItemCount(params)),
			} }
		/>
	)
}

export default connect()(CartItemQuantityContainer)
