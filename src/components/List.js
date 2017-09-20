import React, { Component } from 'react';
import { Container, Icon, Button, Content, List, ListItem, Body, Text } from 'native-base';

export default class ListComponent extends Component {
  renderRow(item) {
    return (
      <ListItem key={item.id}>
        <Body>
          <Text>{item.name}</Text>
        </Body>
        <Button transparent>
          <Icon name="more" />
        </Button>
      </ListItem>
    )
  }
  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.props.items.map(this.renderRow.bind(this))}
          </List>
        </Content>
      </Container>
    )
  }
}
