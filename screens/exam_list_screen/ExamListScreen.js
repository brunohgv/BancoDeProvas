import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AppHeader from '../../components/headers/AppHeader';

export default class ExamListScreen extends Component {

  static navigationOptions ={
    header: null
  }

  render() {
    return (
      <View>
        <AppHeader {...this.props} title="Lista de Provas"/>
        <Text> ExamListScreen </Text>
      </View>
    )
  }
}