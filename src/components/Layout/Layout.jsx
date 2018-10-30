import React from 'react'
import PropTypes from 'prop-types'

import {
	Header,
	Content,
	Footer,
} from '~/components'

import './Layout.css'

Layout.propTypes = { children: PropTypes.element.isRequired }

export default function Layout({ children }) {
	return (
		<div className="Layout">
			<Header className="Layout__header" />
			<Content className="Layout__content">
				{ children }
			</Content>
			<Footer className="Layout__footer" />
		</div>
	)
}
