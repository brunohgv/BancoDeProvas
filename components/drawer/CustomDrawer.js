import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import { DrawerItems } from 'react-navigation'

export default class CustomDrawer extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Image source={require('../../assets/img/logo_ufrpe.jpg')} style={{height: 180, width: null}} />
        </View>
        <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}