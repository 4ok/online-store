import React from 'react'
import { connect } from 'react-redux'

import { MainMenu } from '~/components'

function MainMenuContainer({ className, selectedKey }) {
	return (
		<MainMenu
			{ ...{
				className,
				selectedKey,
			} }
		/>
	)
}

export default connect(state => ({
	// eslint-disable-next-line object-curly-newline
	selectedKey: state.router.location.pathname,
}))(MainMenuContainer)
