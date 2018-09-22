import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import AppHeader from './components/headers/AppHeader'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import HomeScreen from './screens/home_screen/HomeScreen'
import ExamListScreen from './screens/exam_list_screen/ExamListScreen';
import CustomDrawer from './components/drawer/CustomDrawer';
import SubjectListScreen from './screens/subject_list_screen/SubjectListScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    SubjectList: {screen: SubjectListScreen}
  },
  {
    contentComponent: CustomDrawer
  }
)

const AppStackNavigator = createStackNavigator(
  {
    Drawer: {screen: AppDrawerNavigator},
    ExamList: {screen: ExamListScreen}
  },
  {
    headerMode: "none"
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
