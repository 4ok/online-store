import cn from 'classnames'
import { autobind } from 'core-decorators'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { notification, Icon, Button } from 'antd'

import { CartItem } from '~/components'

import { pages } from '~/data'

import './Cart.css'

const orderIconsTypes = {
	'-1': 'caret-up',
	1: 'caret-down',
}

const columns = [
	{
		header: 'Product',
		key: 'name',
		sortable: true,
	},
	{
		header: 'Quantity',
		key: 'count',
		sortable: true,
	},
	{
		header: 'Price',
		key: 'price',
		sortable: true,
	},
	{
		header: 'Actions',
		key: 'actions',
		sortable: false,
	},
]

export default @autobind class Cart extends PureComponent {

	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			image: PropTypes.string,
			name: PropTypes.string,
			desc: PropTypes.string,
			price: PropTypes.number,
			count: PropTypes.number,
		})),
		sort: PropTypes.shape({
			key: PropTypes.string,
			order: PropTypes.oneOf([ -1, 1 ]),
		}).isRequired,
		sortCartItems: PropTypes.func.isRequired,
		removeItemFromCart: PropTypes.func.isRequired,
	}

	static defaultProps = { items: [] }

	static emptyStub() {
		return (
			<div className="Cart__empty">
				Your shopping cart is empty.
				&nbsp;
				<Link
					className="Cart__catalog-link"
					to={ pages.catalog.path }
				>
					{ 'Let\'s do one\'s shopping!' }
				</Link>
			</div>
		)
	}

	onMakeOrder() {
		const { items } = this.props

		const order = items.map(({ id, count }) => ({
			id,
			count,
		}))

		notification.open({
			message: 'Order json',
			description: JSON.stringify(order, null, 2),
			icon: <Icon type="shopping" />,
		})
	}

	sortIcon({ columnKey }) {
		const { sort: { key, order = 1 } } = this.props

		return (
			<Icon
				className={ cn(
					'Cart__header-order-icon',
					(columnKey !== key) && 'Cart__header-order-icon_hidden'
				) }
				type={ orderIconsTypes[order] }
				theme="outlined"
			/>
		)
	}

	items() {
		const {
			items,
			sortCartItems,
			removeItemFromCart,
		} = this.props

		const headers = columns.map(({ key, header, sortable }) => (
			<th
				className={ cn(sortable && 'Cart__header-sortable') }
				key={ key }
				onClick={ () => sortCartItems({ key }) }
			>
				{ header }
				{ sortable && this.sortIcon({ columnKey: key }) }
			</th>
		))

		const rows = items.map(item => (
			<CartItem
				key={ item.id }
				columnsKeys={ columns.map(column => column.key) }
				data={ item }
				removeItemFromCart={ removeItemFromCart }
			/>
		))

		return (
			<React.Fragment>
				<table className="Cart__items">
					<thead>
						<tr>
							{ headers }
						</tr>
					</thead>
					<tbody>
						{ rows }
					</tbody>
				</table>
				<Button
					className="Cart__submit"
					size="large"
					icon="euro"
					onClick={ this.onMakeOrder }
				>
					Buy all goods
				</Button>
			</React.Fragment>
		)
	}

	render() {
		const { items } = this.props

		return (
			<div className="Cart">
				<h1>Your Shopping Cart</h1>
				{ items.length > 0 && (
					<div className="Cart__count">{ items.length } items</div>
				) }
				{ (items.length === 0)
					? Cart.emptyStub()
					: this.items() }
			</div>
		)
	}
}
