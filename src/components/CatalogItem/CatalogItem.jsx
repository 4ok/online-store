import { autobind } from 'core-decorators'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Price } from '~/components'
import { CartItemQuantityContainer } from '~/containers'

import {
	Card,
	Button,
	Rate,
	message,
} from 'antd'

import './CatalogItem.css'

const { Meta } = Card

const DEFAULT_COUNT_ITEMS = 1

message.config({
	maxCount: 1,
	duration: 3,
})

export default @autobind class CatalogItem extends PureComponent {

	static propTypes = {
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		images: PropTypes.shape({
			small: PropTypes.string,
			medium: PropTypes.string,
		}).isRequired,
		rate: PropTypes.number.isRequired,
		stock: PropTypes.number.isRequired,
		addItemToCart: PropTypes.func.isRequired,
		removeItemFromCart: PropTypes.func.isRequired,
		changeCartItemCount: PropTypes.func.isRequired,
		countInCart: PropTypes.number.isRequired,
	}

	constructor(...args) {
		super(...args)

		this.count = DEFAULT_COUNT_ITEMS
	}

	componentDidUpdate(prevProps) {
		const { count } = this
		const { countInCart: prevCountInCart } = prevProps
		const { countInCart, name } = this.props
		const Rf = React.Fragment

		if (countInCart !== prevCountInCart) {
			let text

			if (prevCountInCart === 0) {
				text = <Rf>&ldquo;{ name }&rdquo; <strong>was added</strong> to cart</Rf>
			} else if (countInCart === 0) {
				text = <Rf>&ldquo;{ name }&rdquo; <strong>was removed</strong> from cart</Rf>
			} else {
				text = <Rf><strong>Changed the quantity</strong> of &ldquo;{ name }&rdquo; to { count }</Rf>
			}

			message.success(text)
		}
	}

	onCountChange(count) {
		this.count = count
	}

	starsRate() {
		const { rate } = this.props

		return Math.round(rate * 2) / 2
	}

	cartButton() {
		const {
			id,
			name,
			desc,
			price,
			stock,
			countInCart,
			addItemToCart,
			removeItemFromCart,
			images: { small: image },
		} = this.props

		const params = (countInCart > 0) ? {
			action: removeItemFromCart,
			text: 'Remove from cart',
			type: 'danger',
		} : {
			action: addItemToCart,
			text: 'Add to cart',
			type: 'default',
		}

		return (
			<Button
				type={ params.type }
				block
				onClick={ () => {
					params.action({
						id,
						image,
						name,
						desc,
						price,
						stock,
						count: this.count,
					})
				} }
				icon="shopping-cart"
			>
				{ params.text }
			</Button>
		)
	}

	bottom() {
		const { id, stock, countInCart } = this.props

		return (
			<div className="CatalogItem__bottom">
				{ this.cartButton() }
				{ stock > 1 && (
					<CartItemQuantityContainer
						{ ...{
							className: 'CatalogItem__count',
							itemId: id,
							countInCart,
							maxValue: stock,
							defaultValue: DEFAULT_COUNT_ITEMS,
							onChange: this.onCountChange,
						} }
					/>
				) }
			</div>
		)
	}

	render() {
		const {
			name,
			desc,
			price,
			rate,
			images: { medium: image },
		} = this.props

		return (
			<Card
				className="CatalogItem"
				hoverable
				cover={ (
					<img
						className="CatalogItem__image"
						alt={ name }
						src={ image }
					/>
				) }
			>
				<Meta
					title={ name }
					description={ desc }
				/>
				<Price
					className="CatalogItem__price"
					price={ price }
				/>
				<Rate
					className="CatalogItem__rate"
					allowHalf
					disabled
					defaultValue={ this.starsRate({ rate }) }
				/>
				{ this.bottom() }
			</Card>
		)
	}
}
