import React from 'react';
import { StyleSheet } from 'react-native';
import { Root } from 'native-base';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import HomeScreen from './screens/home_screen/HomeScreen'
import ExamListScreen from './screens/exam_list_screen/ExamListScreen';
import ExamDetailScreen from './screens/exam_detail_screen/ExamDetailScreen'
import CustomDrawer from './components/drawer/CustomDrawer';
import SubjectListScreen from './screens/subject_list_screen/SubjectListScreen';

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <AppStackNavigator />
      </Root>
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
    ExamList: {screen: ExamListScreen},
    ExamDetail: {screen: ExamDetailScreen}
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
