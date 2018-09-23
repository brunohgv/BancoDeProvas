import React, { Component } from 'react'
import { StyleSheet, Image, CameraRoll } from 'react-native'
import { Container, H1, Content, Header, Left, Button, Icon, Body, Right, Title, Text, List, Card, CardItem, Toast } from 'native-base';
import Lightbox from 'react-native-lightbox';

export default class ExamDetail extends Component {
  constructor (props) {
    super(props)

    this.handleImageDownload.bind(this)

    this.state = {
      myExam: {
        name: 'Nome da Prova',
        subject: 'Matéria',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        images: [
          {uri: 'http://placekitten.com/300/300'},
          {uri: 'http://placekitten.com/200/300'},
          {uri: 'http://placekitten.com/400/300'},
          {uri: 'http://placekitten.com/200/200'},
          {uri: 'http://placekitten.com/200/500'}
        ]
      },
      showToast: false
    }

  }

  handleImageDownload = (url) => {
    CameraRoll.saveToCameraRoll(url)
      .then(() => {
        Toast.show({
          text: 'Imagem Salva!',
          type: "success",
          duration: 1000
        })
      })
      .catch((err) => {
        Toast.show({
          text: err.message,
          type: 'danger',
          duration: 1000
        })
      })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" type="Ionicons" />
            </Button>
          </Left>
          <Body>
            <Title>Detalhes</Title>
          </Body>
          <Right />
        </Header>
        
        <Content style={styles.contentPadding}>
          <H1>{this.state.myExam.name}</H1>
          <Text>{this.state.myExam.subject}</Text>
          <Text style={styles.spacer}>{this.state.myExam.description}</Text>
          <List
            dataArray={this.state.myExam.images}
            renderRow={(image) =>
              // <Lightbox >
              <Card>
                <CardItem cardBody>
                  <Image source={image} style={styles.imageRow}/>
                </CardItem>
                <CardItem>
                  <Right>
                    <Button transparent onPress={() => this.handleImageDownload(image.uri)}>
                      <Icon name="download" type="Ionicons"></Icon>
                      <Text>Download</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
              // </Lightbox>
            }>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  contentPadding: {
    padding: 10
  },
  imageRow: {
    height: 150,
    width: null,
    flex: 1
  },
  spacer: {
    marginTop: 25
  }
})