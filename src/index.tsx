import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './scss/main.scss'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, Store, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from './store/reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<JState, actionType> & {
  dispatch: DispatchType
} = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
