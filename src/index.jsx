import 'whatwg-fetch'
import 'promise-polyfill/src/polyfill'

import { createHashHistory } from 'history'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from '~/components'
import reducers from '~/reducers'
import { getStore } from '~/utils'

import './index.css'

const history = createHashHistory()
const store = getStore({
	reducers,
	history,
})

ReactDOM.render(
	<Provider store={ store }>
		<App history={ history } />
	</Provider>,
	document.getElementById('root')
)
