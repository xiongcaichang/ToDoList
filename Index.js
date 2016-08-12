import React, { Component } from 'react'
import { AppRegistry } from 'react-native'


import { createStore } from 'redux'

import { Provider } from 'react-redux'
import App from './app/components/App'
import todos from './app/reducers/todos'

let store = createStore(todos)

class HomePage extends Component {
  render() {
    return (
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  );
  }
}

AppRegistry.registerComponent('ToDoList',() => HomePage);