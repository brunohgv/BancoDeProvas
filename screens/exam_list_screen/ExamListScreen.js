import React, { Component } from 'react'
import AppHeader from '../../components/headers/AppHeader';
import { Container, Content, List, ListItem, Text, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import BackHeader from '../../components/headers/BackHeader';

export default class ExamListScreen extends Component {
  render() {
    const items = [
      '1VA','2VA','3VA', '2VA',
      '1VA','2VA','3VA', '2VA',
      '1VA','2VA','3VA', '2VA',
      '1VA','2VA','3VA', '2VA',
      '1VA','2VA','3VA', '2VA',
      '1VA','2VA','3VA', '2VA',
      '1VA','2VA','3VA', '2VA',
      '1VA','2VA','3VA', '2VA',
    ]
    const title = this.props.navigation.getParam('title', 'default')
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" type="Ionicons" />
            </Button>
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={items}
            renderRow={(item) => 
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    )
  }
}