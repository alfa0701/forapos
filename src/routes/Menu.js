import React, {Component} from 'react';
import {Container, Header, Tab, Tabs, Text, Spinner, Content, Icon } from 'native-base';
import { inject, observer } from 'mobx-react';
import List from '../components/List'

@inject('menu')
@observer
export default class Menu extends Component {

  static navigationOptions = {
    tabBarLabel: 'Menü',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-book" style={{color: tintColor}} />,
  }

  render() {
    const store = this.props.menu
    const loading = store.categories.loading
    const categories = store.categories.data

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
          {categories && categories.map(category => (
            <Tab heading={category.name} key={category.id}>
              <List items={category.items}/>
            </Tab>
          ))}
        </Tabs>
      </Container>
    )
  }
}
