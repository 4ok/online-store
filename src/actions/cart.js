import { actionsTypes as at } from '~/constants'

export const addItem = ({
	id,
	image,
	name,
	desc,
	price,
	stock,
	count,
}) => (dispatch) => {
	dispatch({
		type: at.CART_ADD_ITEM,
		payload: {
			id,
			image,
			name,
			desc,
			price,
			stock,
			count,
		},
	})
}

export const changeItemCount = ({ id, count }) => (dispatch) => {
	dispatch({
		type: at.CART_CHANGE_ITEM_COUNT,
		payload: {
			id,
			count,
		},
	})
}

export const removeItem = ({ id }) => (dispatch) => {
	dispatch({
		type: at.CART_REMOVE_ITEM,
		payload: { id },
	})
}

export const sortItems = ({ key }) => (dispatch) => {
	dispatch({
		type: at.CART_SORT_ITEMS,
		payload: { key },
	})
}
