// LoginScreen.js

import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  AsyncStorage,
} from "react-native";
import { NavigationActions } from "react-navigation";
import firebase from "@react-native-firebase/app";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errorMessage: null };
  }

  // // Called before rendering component for first time
  // componentWillMount() {
  //   console.log("componentWillMount FIRED!!!!!!!!");

  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log("user is logged");
  //       this.props.navigation.dispatch(
  //         NavigationActions.navigate({ routeName: "TabNavigator" })
  //       );
  //     }
  //   });
  // }

  // undotEmail = (emailToParse) => {
  //   // Separate the two strings based on the @ symbol
  //   var someString = emailToParse;
  //   var atIndex = someString.indexOf("@");
  //   var emailStart = someString.substr(0, atIndex);
  //   var emailEnd = someString.substr(atIndex + 1);

  //   // Replace the dots in strings
  //   var newEmailStart = emailStart.replace(".", "%2E");
  //   var newEmailEnd = emailEnd.replace(".", "&dot;");

  //   // Build the new email
  //   var finalEmail = newEmailStart + "@" + newEmailEnd;
  //   return finalEmail;
  // };

  // /* HELPER FUNCTIONS */

  // async storeItem(key, item) {
  //   try {
  //     // we want to wait for the Promise returned by AsyncStorage.setItem()
  //     // to be resolved to the actual value before returning the value
  //     var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
  //     return jsonOfItem;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // async retrieveItem(key) {
  //   try {
  //     const retrievedItem = await AsyncStorage.getItem(key);
  //     const item = JSON.parse(retrievedItem);
  //     return item;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // /* END HELPER FUNCTIONS */

  // handleLogin = () => {
  //   const { email, password } = this.state;

  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       // If you need to do anything with the user, do it here
  //       // The user will be logged in automatically by the
  //       // `onAuthStateChanged` listener we set up in App.js earlier

  //       var emailToAccount = this.undotEmail(email);

  //       // Get program name for the programs

  //       var programFileNamePath = "Account/" + emailToAccount + "/PROGRAM_FILE";

  //       var yourAccount = firebase.database().ref(programFileNamePath);

  //       yourAccount.once("value", (snapshot) => {
  //         var yourAccountValue = snapshot.val();

  //         // Save data in AsyncStorage
  //         this.storeItem("PROGRAM_FILE", yourAccountValue)
  //           .then((storeItemResponse) => {
  //             //this callback is executed when your Promise is resolved
  //             console.log("Now saving: " + yourAccountValue);

  //             // Save more data in AsyncStorage
  //             this.storeItem("LOGGED_IN_ACCOUNT", emailToAccount)
  //               .then((storeItemResponse) => {
  //                 //this callback is executed when your Promise is resolved
  //                 console.log("Now saving: " + emailToAccount);
  //                 this.props.navigation.dispatch(
  //                   NavigationActions.navigate({ routeName: "TabNavigator" })
  //                 );
  //               })
  //               .catch((error) => {
  //                 //this callback is executed when your Promise is rejected
  //                 console.log("Promise is rejected with error: " + error);
  //               });
  //           })
  //           .catch((error) => {
  //             //this callback is executed when your Promise is rejected
  //             console.log("Promise is rejected with error: " + error);
  //           });
  //       });
  //     })
  //     .catch((error) => {
  //       const { code, message } = error;
  //       // For details of error codes, see the docs
  //       // The message contains the default Firebase string
  //       // representation of the error

  //       Alert.alert(message);
  //     });
  // };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../img/spindle.png")}
          style={{
            flex: 1,
            alignSelf: "stretch",
            width: undefined,
            height: undefined,
            resizeMode: "contain",
          }}
        />

        {/* {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <View style={{ width: "100%", marginTop: 8 }}>
          <Button
            color="#F36E54"
            title="Login"
            onPress={this.handleLogin}
            style={{ alignSelf: "stretch" }}
          />
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38a8b7",
    padding: "10%",
  },
  textInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 0,
    margin: 8,
    paddingLeft: 24,
    backgroundColor: "#fff",
    borderRadius: 24,
  },
});
