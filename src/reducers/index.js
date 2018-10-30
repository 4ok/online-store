import { combineReducers } from 'redux'

import catalog from './catalog'
import cart from './cart'

export default combineReducers({
	catalog,
	cart,
})
