import { actionsTypes as at } from '~/constants'

import { pages } from '~/data'

const initialState = {
	fetching: false,
	items: [],
}

export default function catalog(state = initialState, action = {}) {
	const { type, payload } = action

	switch (type) {
		case at.ROUTER_LOCATION_CHANGE: {

			if (payload.location.pathname === pages.catalog.path) {
				return {
					fetching: true,
					items: [],
				}
			}

			return state
		}
		case at.CATALOG_ITEMS_RESOLVED: {
			return {
				fetching: false,
				items: payload.items,
			}
		}
		case at.CATALOG_ITEMS_REJECTED: {
			return {
				fetching: false,
				error: payload.error,
				items: [],
			}
		}
		case at.CATALOG_CLEAR_STATE: {
			return initialState
		}
		default: {
			return state
		}
	}
}
