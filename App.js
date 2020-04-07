/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import firebase from "@react-native-firebase/app";

//Screens
import LoginScreen from "./app/LoginScreen";
import ProfileList from "./app/ProfileList";
import NotificationList from "./app/NotificationList";
import ProgramList from "./app/ProgramList";

// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\nCmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu",
});

const firebaseCredentials = Platform.select({
  ios: "https://invertase.link/firebase-ios",
  android: "https://invertase.link/firebase-android",
});

type Props = {};

// =========================================================
// Create nav stacks for each tab
// =========================================================

const ProgramStack = createStackNavigator({
  Home: ProgramList,
});
const ProfileStack = createStackNavigator({ Home: ProfileList });
const NotificationStack = createStackNavigator({ Home: NotificationList });

// =========================================================
// Create nav options for each tab
// =========================================================

ProgramStack.navigationOptions = {
  tabBarLabel: "Programs",
  tabBarIcon: ({ tintColor }) => (
    <Icon type="feather" name="list" color={tintColor} />
  ),
};

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ tintColor }) => (
    <Icon type="feather" name="user" color={tintColor} />
  ),
};

NotificationStack.navigationOptions = {
  tabBarLabel: "Notifications",
  tabBarIcon: ({ tintColor }) => (
    <Icon type="feather" name="bell" color={tintColor} />
  ),
};

// =========================================================
// Create main app's tab navigation
// =========================================================

const TabNavigator = createBottomTabNavigator(
  {
    Programs: ProgramStack,
    Profile: ProfileStack,
    Notifications: NotificationStack,
  },
  {
    tabBarOptions: {
      activeTintColor: "#38a8b7",
    },
  }
);

const RootStack = createSwitchNavigator(
  {
    LoginScreen,
    TabNavigator,
  },
  {
    initialRouteName: "LoginScreen",
  }
);

const App = createAppContainer(RootStack);
export default App;
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native + Firebase!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         {!firebase.apps.length && (
//           <Text style={styles.instructions}>
//             {`\nYou currently have no Firebase apps registered, this most likely means you've not downloaded your project credentials. Visit the link below to learn more. \n\n ${firebaseCredentials}`}
//           </Text>
//         )}
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
