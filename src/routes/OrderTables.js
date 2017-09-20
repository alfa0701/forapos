import React, {Component} from 'react';
import {Container, Header, Tab, Tabs, Text, Spinner, Content, Icon, List, ListItem, Body, Button } from 'native-base';
import { inject, observer } from 'mobx-react';
import { NavigationActions } from 'react-navigation'

@inject('saloons')
@observer
export default class Menu extends Component {

  static navigationOptions = {
    tabBarLabel: 'Siparişler',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-cafe" active style={{color: tintColor}} />,
  }

  handleTableSelect(item) {
    this.props.saloons.ordersViewTable = item.id
    this.props.navigation.navigate({routeName: 'Orders'})
  }

  renderRow(item) {
    return (
      <ListItem key={item.id}>
        <Body button onPress={e => this.handleTableSelect(item)}>
          <Text>{item.name}</Text>
        </Body>
        <Icon name="ios-arrow-forward" />
      </ListItem>
    )
  }

  render() {
    const store = this.props.saloons
    const loading = store.saloons.loading
    const saloons = store.saloons.data

    if (loading) {
      return (
        <Content>
          <Header/>
          <Spinner/>
        </Content>
      )
    }

    return (
      <Container>
        <Header/>
        {saloons && saloons.map(saloon => (
          <Tab heading={saloon.name} key={saloon.id}>
            <List>
              {saloon.tables.filter(t => t.orders && t.orders.length > 0).map(this.renderRow.bind(this))}
            </List>
          </Tab>
        ))}
      </Container>
    )
  }
}