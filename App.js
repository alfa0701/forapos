import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import stores from './src/store/index'
import Navigator from './src/routes'

export default class App extends Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
  }

  render() {
    return(
      <Provider {...stores}>
        <Navigator/>
      </Provider>
    )
  }
}
