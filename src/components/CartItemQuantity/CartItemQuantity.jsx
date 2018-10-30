import cn from 'classnames'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { autobind } from 'core-decorators'

import { Select } from 'antd'

const { Option } = Select

const MAX_VALUE = 5

export default @autobind class CartItemQuantity extends PureComponent {

	static propTypes = {
		itemId: PropTypes.number.isRequired,
		countInCart: PropTypes.number.isRequired,
		defaultValue: PropTypes.number.isRequired,
		maxValue: PropTypes.number.isRequired,
		changeCartItemCount: PropTypes.func.isRequired,
		className: PropTypes.string,
		onChange: PropTypes.func,
	}

	static defaultProps = {
		className: null,
		onChange: null,
	}

	onCountChange(value) {
		const {
			itemId,
			countInCart,
			onChange,
			changeCartItemCount,
		} = this.props

		if (onChange) {
			onChange(value)
		}

		if (countInCart > 0) {
			changeCartItemCount({
				id: itemId,
				count: value,
			})
		}
	}

	render() {
		const {
			className,
			maxValue,
			countInCart,
			defaultValue,
		} = this.props

		const size = Math.min(maxValue, MAX_VALUE)
		const values = [ ...new Array(size) ].map((_, index) => index + 1)

		return (
			<Select
				className={ cn('CatalogItemQuantity', className) }
				defaultValue={ countInCart || defaultValue }
				onChange={ this.onCountChange }
			>
				{ values.map(item => (
					<Option
						key={ item }
						value={ item }
					>
						{ item }
					</Option>
				)) }
			</Select>
		)
	}
}
