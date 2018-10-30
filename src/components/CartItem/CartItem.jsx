import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Price } from '~/components'
import { CartItemQuantityContainer } from '~/containers'

import { Button } from 'antd'

import './CartItem.css'

export default class CartItem extends Component {

	static propTypes = {
		columnsKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
		data: PropTypes.shape({
			id: PropTypes.number,
			image: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number,
			count: PropTypes.number,
			stock: PropTypes.number,
		}).isRequired,
		removeItemFromCart: PropTypes.func.isRequired,
	}

	// It is necessary, because the component has no flat structure
	shouldComponentUpdate(nextProps) {
		const { props } = this

		return nextProps.id !== props.id
	}

	row({ columnKey }) {
		const {
			data,
			removeItemFromCart,
		} = this.props

		const {
			id,
			image,
			name,
			desc,
			price,
			stock,
			count,
		} = data

		switch (columnKey) {
			case 'name': {
				return (
					<div className="CartItem__product">
						<img
							className="CartItem__image"
							src={ image }
							alt={ name }
						/>
						<div className="CartItem__text">
							<div className="CartItem__name">
								{ name }
							</div>
							<div className="CartItem__desc">
								{ desc }
							</div>
						</div>
					</div>
				)
			}
			case 'price': {
				return (
					<Price price={ price } />
				)
			}
			case 'count': {
				return (stock > 1) ? (
					<CartItemQuantityContainer
						{ ...{
							itemId: id,
							countInCart: count,
							maxValue: stock,
							defaultValue: count,
						} }
					/>
				) : ('the last')
			}
			case 'actions': {
				return (
					<Button
						icon="delete"
						onClick={ () => removeItemFromCart({ id }) }
					>
						Remove
					</Button>
				)
			}
			default: {
				return data[columnKey]
			}
		}
	}

	render() {
		const { columnsKeys } = this.props

		return (
			<tr>
				{ columnsKeys.map(columnKey => (
					<td key={ columnKey }>
						{ this.row({ columnKey }) }
					</td>
				)) }
			</tr>
		)
	}
}
