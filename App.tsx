

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class MyHomeScreen extends React.Component {
 
  props: any;

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
       
      </View>

    );
  }
}

class MyNotificationsScreen extends React.Component {
 
  props: any;

  render() {
    return (
      <View>
        <Text>Notifications Screen</Text>

      </View>


    );
  }
}


//@ts-ignore
const homeStackNavigator = createStackNavigator({
  home: {
    screen: MyHomeScreen,
    navigationOptions: () => ({
      header: <View></View>,
      drawerLabel: 'Home',
    }),
  }
});

//@ts-ignore
const notificationStackNavigator = createStackNavigator({
  notification: {
    screen: MyNotificationsScreen,
    navigationOptions: () => ({
      header: <View></View>,
    }),
    
  }
});

const drawerNavigator = createDrawerNavigator({
  homeStackNavigator: {
    screen:homeStackNavigator,
    navigationOptions: {
      drawerLabel: 'Home'
    }

  } ,
  notificationStackNavigator: {
    screen:notificationStackNavigator,
    navigationOptions: {
      drawerLabel: 'Notification'
    }
  },
}, {
    initialRouteName: 'homeStackNavigator'
  })

const appStackNavigator = createStackNavigator({
  drawerNavigator: {
    screen: drawerNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerLeft: (
      <TouchableOpacity onPress={()=>{
        navigation.openDrawer()
      }}>
         <Text>MENU</Text>
      </TouchableOpacity>
     ),
    }),
  },
}, {
    initialRouteName: 'drawerNavigator',
  });


// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });

const MyApp = createAppContainer(appStackNavigator);

export default MyApp;


