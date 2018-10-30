import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Loading } from '~/components'
import { CatalogItemContainer } from '~/containers'

import { message } from 'antd'

import './Catalog.css'

export default class Catalog extends PureComponent {

	static propTypes = {
		fetching: PropTypes.bool.isRequired,
		items: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			desc: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			rate: PropTypes.number.isRequired,
		})).isRequired,
		error: PropTypes.string,
	}

	static defaultProps = { error: null }

	componentDidUpdate() {
		const { error } = this.props

		if (error) {
			message.error(error)
		}
	}

	items() {
		const { items } = this.props

		return (
			<div className="Catalog__items">
				{ items.map(item => (
					<CatalogItemContainer
						key={ item.id }
						{ ...item }
					/>
				)) }
			</div>
		)
	}

	render() {
		const { fetching } = this.props

		return (
			<div className="Catalog">
				<h1>Do the shopping</h1>
				{ fetching
					? <Loading />
					: this.items() }
			</div>
		)
	}
}
