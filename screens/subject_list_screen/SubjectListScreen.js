import React, { Component } from 'react'
import AppHeader from '../../components/headers/AppHeader';
import { Container, Content, List, ListItem, Text, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

export default class SubjectListScreen extends Component {
  render() {

    const items = [
      'Cálculo Diferencial e Integral I',
      'Cálculo Diferencial e Integral II',
      'Estatística Exploratória',
      'Arquitetura e Organização de Computadores',
      'Sistemas Operacionais',
      'Matemática Discreta I',
      'Matemática Discreta II',
      'Circuitos Digitais',
      'Banco de Dados',
      'Inteligência Artificial',
      'Álgebra Lineare Vetorial Para Computação',
      'Metodologia Científica Aplicada a Computação',
    ]

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Matérias</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={items}
            renderRow={(item) => 
              <ListItem onPress={() => this.props.navigation.navigate('ExamList', {title: item})}>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    )
  }
}