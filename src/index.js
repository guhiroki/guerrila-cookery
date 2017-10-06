import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import appReducer from './reducers/reducers'

import registerServiceWorker from './register-service-worker'

import App from './containers/app'

import './styles/font.css'
import './styles/base.css'

const enhancer = compose(
    applyMiddleware(
        createLogger(), 
        thunk
    )
)

const store = createStore(appReducer, enhancer)


ReactDOM.render(<Provider store={ store }>
                    <App />
                </Provider>, document.getElementById('root'))
registerServiceWorker()
