// NotificationList.js

import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Linking,
  AsyncStorage,
  Alert,
} from "react-native";
// import { List, ListItem } from "react-native-elements";
import firebase from "@react-native-firebase/app";
import { StackActions, NavigationActions } from "react-navigation";

export default class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arrData: [], isLoading: true };
  }

  // static navigationOptions = {
  //   title: "Notifications",
  //   headerStyle: {
  //     backgroundColor: "#38a8b7",
  //   },
  //   headerTintColor: "#fff",
  //   headerTitleStyle: {
  //     fontWeight: "normal",
  //   },
  // };

  // async retrieveItem(key) {
  //   try {
  //     const retrievedItem = await AsyncStorage.getItem(key);
  //     const item = JSON.parse(retrievedItem);
  //     return item;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // handleClick = (someTitle, someURL) => {
  //   if (someURL.indexOf("http") == 0) {
  //     Linking.openURL(someURL);
  //   } else {
  //     Alert.alert(
  //       someTitle,
  //       someURL,
  //       [{ text: "OK", onPress: () => console.log("OK Pressed") }],
  //       { cancelable: false }
  //     );
  //   }
  // };

  // componentDidMount() {
  //   // Get firebase data
  //   this.retrieveItem("LOGGED_IN_ACCOUNT")
  //     .then((promiseResponse) => {
  //       //this callback is executed when your Promise is resolved

  //       var restoredEmail = this.dotEmail(promiseResponse);

  //       var notifsRef = firebase.database().ref("Notification/");

  //       notifsRef.once("value", (snapshot) => {
  //         var returnArr = [];

  //         snapshot.forEach((child) => {
  //           var childJSON = child.val();

  //           var whoCanViewValue = childJSON.WHO_CAN_VIEW;

  //           if (
  //             whoCanViewValue.includes("ALL_USERS") == true ||
  //             whoCanViewValue.includes(restoredEmail) == true
  //           ) {
  //             returnArr.push(child.val());
  //             console.log(child.key);
  //           }
  //         });

  //         this.setState({
  //           arrData: returnArr,
  //           isLoading: false,
  //         });

  //         console.log(this.state.arrData);
  //       });
  //     })
  //     .catch((error) => {
  //       //this callback is executed when your Promise is rejected
  //       console.log("Promise is rejected with error: " + error);
  //     });
  // }

  // dotEmail = (emailToParse) => {
  //   // Separate the two strings based on the @ symbol
  //   var someString = emailToParse;
  //   var atIndex = someString.indexOf("@");
  //   var emailStart = someString.substr(0, atIndex);
  //   var emailEnd = someString.substr(atIndex + 1);

  //   // Replace the dots in strings
  //   var newEmailStart = emailStart.replace("%2E", ".");
  //   var newEmailEnd = emailEnd.replace("&dot;", ".");

  //   // Build the new email
  //   var finalEmail = newEmailStart + "@" + newEmailEnd;
  //   return finalEmail;
  // };

  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView>
          {this.state.isLoading == true ? (
            <ActivityIndicator
              size="large"
              color="#F36E54"
              style={styles.loadingSpinner}
            />
          ) : null}

          <List containerStyle={{ marginBottom: 20, width: "100%" }}>
            {this.state.arrData.map((l) => (
              <ListItem
                hideChevron={true}
                key={l.ALERT_TITLE}
                title={l.ALERT_TITLE}
                onPress={() =>
                  this.handleClick(l.ALERT_TITLE, l.ALERT_DESCRIPTION)
                }
                underlayColor={"#dedede"}
              />
            ))}
          </List>
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  loadingSpinner: {
    marginTop: 16,
    marginBottom: 16,
  },
});
