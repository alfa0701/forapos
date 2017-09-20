import React, { Component } from 'react';
import ReactNative from 'react-native'
import { Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class Post extends Component {

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    Image.getSize(this.props.imageUrl, (width, height) => {
      const imageHeight =  250
      const scaleFactor = height / imageHeight
      const imageWidth = width / scaleFactor
      this.setState({width: imageWidth, height: imageHeight})
    })
  }

  render () {
    const {width, height} = this.state
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: this.props.imageUrl}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: this.props.imageUrl }} style={{height: this.state.height, width: this.state.width, flex: 1}} resizeMode='contain'/>
            </CardItem>
            <CardItem>
              <Text>{this.props.description}</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
