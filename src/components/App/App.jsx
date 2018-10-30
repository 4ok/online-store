import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'

import {
	Layout,
	Routes,
} from '~/components'

App.propTypes = { history: PropTypes.instanceOf(Object).isRequired }

export default function App({ history }) {
	return (
		<ConnectedRouter history={ history }>
			<Layout>
				<Routes />
			</Layout>
		</ConnectedRouter>
	)
}
