import { fetchApi } from '~/utils'
import { catalog as catalogApi } from '~/api'
import { actionsTypes as at } from '~/constants'

const errors = { internal: 'Internal error. Please try again later.' }

export const getItems = () => (dispatch) => {

	fetchApi({ api: catalogApi.items })
		.then(response => ((response.status === 200) ? response.json() : {}))
		.then((json) => {
			const { data: items } = json

			return dispatch({
				type: at.CATALOG_ITEMS_RESOLVED,
				payload: { items },
			})
		})
		.catch(dispatch.bind(dispatch, {
			type: at.CATALOG_ITEMS_REJECTED,
			payload: { error: errors.internal },
		}))
}

export const clearState = () => (dispatch) => {

	return dispatch({ type: at.CATALOG_CLEAR_STATE })
}
