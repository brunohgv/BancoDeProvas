import React, { Component } from 'react'
import { Container, H1, Content, List, ListItem, Text } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import AppHeader from '../../components/headers/AppHeader';

export default class HomeScreen extends Component {
  render() {

    const coverImage = {uri: 'http://placekitten.com/g/300/200'}

    const items = [
      '2VA - Física',
      '3VA - Teoria da Computação',
      '1VA - Matemática discreta',
      'Final - Redes'
    ]

    return (
      <Container>
        <AppHeader {...this.props} title="Home"/>
        <Content>
          <Image source={coverImage} style={{height: 200, width: null}}/>
          <H1 style={styles.titlePadding}>Recentes</H1>
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

const styles = StyleSheet.create({
  titlePadding: { 
    padding: 10
  }
})