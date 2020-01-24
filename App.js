import React from 'react'
import AppNavigation from './navigation/AppNavigation'
import rootReducer from './store/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p