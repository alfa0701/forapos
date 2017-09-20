import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import {
  TabNavigator, StackNavigator
} from 'react-navigation'

import Tables from './src/routes/Tables'
import Menu from './src/routes/Menu'
import OrderTables from './src/routes/OrderTables'
import Orders from './src/routes/Orders'

import stores from './src/store/index'


const navigatorOptions = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,

  tabBarOptions: {
    activeTintColor: '#e91e63',
    showIcon: true,
    indicatorStyle: {
      display: 'none'
    },
    labelStyle: {
      fontSize: 13
    },
    tabStyle: {
      height: 70
    }
  },
}

OrderTablesNavigator = StackNavigator({
  OrderTables: {
    screen: OrderTables
  },
  Orders: {
    screen: Orders
  }
})

Navigator = TabNavigator({
  Tables: {
    screen: Tables
  },
  Menu: {
    screen: Menu
  },
  OrderTables: {
    screen: OrderTablesNavigator
  },
}, navigatorOptions);

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



