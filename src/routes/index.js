import {
  TabNavigator, StackNavigator
} from 'react-navigation'

import Tables from '../routes/Tables'
import Menu from '../routes/Menu'
import OrderTables from '../routes/OrderTables'
import Orders from '../routes/Orders'

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
      fontSize: 10,
      marginTop: 2
    },
    tabStyle: {
      height: 53
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


// main navigator
export default TabNavigator({
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
