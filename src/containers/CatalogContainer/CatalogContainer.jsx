import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Catalog } from '~/components'
import { catalog as catalogActions } from '~/actions'

const { getItems, clearState } = catalogActions

class CatalogContainer extends PureComponent {

	static propTypes = { dispatch: PropTypes.func.isRequired }

	componentDidMount() {
		const { dispatch } = this.props

		dispatch(getItems())
	}

	componentWillUnmount() {
		const { dispatch } = this.props

		dispatch(clearState())
	}

	render() {
		const { fetching, items, error } = this.props

		return (
			<Catalog
				{ ...{
					fetching,
					items,
					error,
				} }
			/>
		)
	}
}

export default connect((state) => {
	const { fetching, items, error } = state.catalog

	return {
		fetching,
		items,
		error,
	}
})(CatalogContainer)
