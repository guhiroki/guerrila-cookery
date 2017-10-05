import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import appReducer from './reducers/reducers'

import registerServiceWorker from './register-service-worker'

import App from './containers/app'

import './styles/font.css'
import './styles/base.css'

const store = createStore(appReducer, applyMiddleware(createLogger()))

ReactDOM.render(<Provider store={ store }>
                    <App />
                </Provider>, document.getElementById('root'))
registerServiceWorker()
