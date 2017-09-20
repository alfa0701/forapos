import React, {Component} from 'react';
import {Container, Header, Tab, Tabs, Text, Spinner, Content, Icon } from 'native-base';
import { inject, observer } from 'mobx-react';
import List from '../components/List'

@inject('saloons')
@observer
export default class Menu extends Component {

  static navigationOptions = {
    tabBarLabel: 'Masalar',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-clipboard" active style={{color: tintColor}} />,
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
        <Header hasTabs/>
        <Tabs initialPage={0}>
          {saloons && saloons.map(saloon => (
            <Tab heading={saloon.name} key={saloon.id}>
              <List items={saloon.tables}/>
            </Tab>
          ))}
        </Tabs>
      </Container>
    )
  }
}
