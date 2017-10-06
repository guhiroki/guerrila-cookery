//react imports
import React from 'react'
import ReactDOM from 'react-dom'
//redux imports
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import appReducer from './reducers/reducers'
//Application imports
import registerServiceWorker from './register-service-worker'
import App from './containers/app'
//stile imports
import './styles/font.css'
import './styles/base.css'

//Creating enhacer to encapsulate the middlewares
const enhancer = compose(
    applyMiddleware(
        createLogger(), 
        thunk
    )
)
//Getting the reducers and enhacer for the provider
const store = createStore(appReducer, enhancer)


ReactDOM.render(<Provider store={ store }>
                    <App />
                </Provider>, document.getElementById('root'))
registerServiceWorker()
