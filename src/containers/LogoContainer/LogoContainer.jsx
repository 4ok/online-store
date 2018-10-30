import React from 'react'
import { connect } from 'react-redux'

import { Logo } from '~/components'

import { pages } from '~/data'

function LogoContainer({ className, link }) {
	return (
		<Logo
			{ ...{
				className,
				link,
			} }
		/>
	)
}

export default connect(state => ({
	link: (state.router.location.pathname === pages.index.path)
		? null
		: pages.index.path,
}))(LogoContainer)
