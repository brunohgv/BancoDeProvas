import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header, Left, Button, Icon, Body, Right, Title } from 'native-base';

export default class BackHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" type="Ionicons" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}