import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { About } from '~/components'

import {
	CatalogContainer,
	CartContainer,
} from '~/containers'

import { pages } from '~/data'

export default function Routes() {
	const routes = [
		{
			path: pages.index.path,
			component: About,
			exact: true,
		},
		{
			path: pages.catalog.path,
			component: CatalogContainer,
		},
		{
			path: pages.cart.path,
			component: CartContainer,
		},
	]

	return (
		<Switch>
			{ routes.map(route => (
				<Route
					key={ route.path }
					{ ...route }
				/>
			)) }
		</Switch>
	)
}
