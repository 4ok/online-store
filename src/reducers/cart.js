import store from 'store'

import { actionsTypes as at } from '~/constants'

const STORAGE_KEY = 'cart'

const saveState = data => store.set(STORAGE_KEY, data)

// We can use the priority queue instead the sort
const sortItems = ({ key, order, state }) => ({
	sort: {
		key,
		order,
	},
	items: state.items.sort((a, b) => {

		if (a[key] === b[key]) {
			return a.id - b.id
		}

		return (a[key] > b[key]) ? order : -order
	}),
})

const initialState = store.get(STORAGE_KEY) || {
	items: [],
	sort: {},
}

export default function cart(state = initialState, action = {}) {
	const { type, payload } = action

	switch (type) {
		case at.CART_ADD_ITEM: {
			const {
				id,
				image,
				name,
				desc,
				price,
				stock,
				count,
			} = payload

			const newState = {
				...state,
				items: [
					...state.items,
					{
						id,
						image,
						name,
						desc,
						price,
						stock,
						count,
					},
				],
			}

			if (state.sort) {
				const { key, order } = state.sort

				return saveState(
					sortItems({
						key,
						order,
						state: newState,
					})
				)
			}

			return newState
		}
		case at.CART_REMOVE_ITEM: {
			const { id } = payload

			return saveState({
				...state,
				items: state.items.filter(item => item.id !== id),
			})
		}
		case at.CART_CHANGE_ITEM_COUNT: {
			const {
				id,
				count,
			} = payload

			return saveState({
				...state,
				items: state.items.map((item) => {

					if (item.id === id) {
						item.count = count
					}

					return item
				}),
			})
		}
		case at.CART_SORT_ITEMS: {
			const { key } = payload
			const order = (state.sort.key === key)
				? state.sort.order * -1
				: 1

			return saveState(
				sortItems({
					key,
					order,
					state,
				})
			)
		}
		default: {
			return state
		}
	}
}
