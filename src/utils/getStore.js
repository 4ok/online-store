import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export default function getStore({ reducers, history }) {
	return createStore(
		connectRouter(history)(reducers),
		composeWithDevTools(
			applyMiddleware(
				reduxThunk,
				routerMiddleware(history)
			)
		)
	)
}
