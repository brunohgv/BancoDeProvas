import React from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class AppHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent
            onPress={() => this.props.navigation.openDrawer()}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}