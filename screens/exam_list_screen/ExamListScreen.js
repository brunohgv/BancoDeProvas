import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

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
              <ListItem onPress={() => this.props.navigation.navigate('ExamDetail')}>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    )
  }
}