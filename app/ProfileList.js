// ProfileList.js

import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  AsyncStorage,
} from "react-native";
// import { Avatar, Icon, List, ListItem } from "react-native-elements";
import {
  StackActions,
  NavigationActions,
  navigation,
  withNavigation,
} from "react-navigation";
import firebase from "@react-native-firebase/app";

export default class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "Loading...", dbulref: null, signedOut: false };
  }

  // async storeItem(key, item) {
  //   try {
  //     //we want to wait for the Promise returned by AsyncStorage.setItem()
  //     //to be resolved to the actual value before returning the value
  //     var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
  //     return jsonOfItem;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // //the functionality of the retrieveItem is shown below
  // async retrieveItem(key) {
  //   try {
  //     const retrievedItem = await AsyncStorage.getItem(key);
  //     const item = JSON.parse(retrievedItem);
  //     return item;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   return;
  // }

  // componentDidMount() {
  //   this.props.navigation.setParams({ outieLogie: this.navHome.bind(this) });

  //   this.retrieveItem("PROGRAM_FILE")
  //     .then((response) => {
  //       //this callback is executed when your Promise is resolved

  //       console.log(response);

  //       var nameFile = response;
  //       var atIndex = nameFile.indexOf(",");
  //       var nameEnd = nameFile.substr(0, atIndex);
  //       var nameStart = nameFile.substr(atIndex + 1);

  //       var finalName = nameStart + " " + nameEnd;

  //       this.setState({ username: finalName });
  //     })
  //     .catch((error) => {
  //       //this callback is executed when your Promise is rejected
  //       console.log("Promise is rejected with error: " + error);
  //     });
  // }

  // static navigationOptions = ({ navigation }) => {
  //   const { params = {} } = navigation.state;
  //   return {
  //     title: "My Profile",
  //     headerRight: (
  //       <View style={{ paddingHorizontal: 20 }}>
  //         <Icon
  //           onPress={() => navigation.state.params.outieLogie()}
  //           type="feather"
  //           name="log-out"
  //           color="#fff"
  //         />
  //       </View>
  //     ),
  //     headerStyle: {
  //       backgroundColor: "#38a8b7",
  //     },
  //     headerTintColor: "#fff",
  //     headerTitleStyle: {
  //       fontWeight: "normal",
  //     },
  //   };
  // };

  // navHome = () => {
  //   console.log("navHome called");

  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(function() {
  //       // Sign-out successful

  //       console.log("sign out successful");
  //       // this.props.navigation.navigate('LoginScreen');
  //       const resetAction = StackActions.reset({
  //         index: 0,
  //         key: null,
  //         actions: [NavigationActions.navigate({ routeName: "Home" })],
  //       });

  //       this.props.navigation.dispatch(resetAction);

  //       console.log("sign out nav ran");
  //     })
  //     .catch(function(error) {
  //       // An error happened
  //     });
  // };

  // componentWillUnmount() {
  //   unsubscribe;
  //   // this.state.dbulref.off('value');
  // }

  // logoutForReal = () => {
  //   console.log("logout_forReal called");

  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(function() {
  //       // Sign-out successful

  //       console.log("sign out successful");
  //     })
  //     .catch(function(error) {
  //       // An error happened
  //     });

  //   this.setState({ signedOut: true });

  //   console.log("Signed out!!!!");
  //   this.navHome();
  // };

  // displayLogoutAlert = () => {
  //   Alert.alert("You tapped the button!");
  // };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.myNameView}>
            {/* <Text style={styles.myName}>{this.state.username}</Text> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myNameView: {
    marginTop: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  myName: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
});
