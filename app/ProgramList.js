// ProgramList.js

import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  AsyncStorage,
} from "react-native";
import { List, ListItem, Icon } from "react-native-elements";
import firebase from "@react-native-firebase/app";
import { NavigationEvents, NavigationActions } from "react-navigation";

export default class ProgramList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: "",
      arrData: [],
      dbulref: null,
      isLoading: true,
      myFirstNameIs: "Program",
    };
  }

  //   static navigationOptions = {
  //     title: "My Programs",
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="comment" color={tintColor} size={24} />
  //     ),
  //     headerStyle: {
  //       backgroundColor: "#38a8b7",
  //     },
  //     headerTintColor: "#fff",
  //     headerTitleStyle: {
  //       fontWeight: "normal",
  //     },
  //   };

  //   /* HELPER FUNCTIONS */

  //   async storeItem(key, item) {
  //     try {
  //       // we want to wait for the Promise returned by AsyncStorage.setItem()
  //       // to be resolved to the actual value before returning the value
  //       var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
  //       return jsonOfItem;
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }

  //   async retrieveItem(key) {
  //     try {
  //       const retrievedItem = await AsyncStorage.getItem(key);
  //       const item = JSON.parse(retrievedItem);
  //       return item;
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }

  //   /* END HELPER FUNCTIONS */

  //   componentDidMount() {
  //     // Get firebase data with path from preferences
  //     firebase.auth().onAuthStateChanged((user) => {
  //       if (user) {
  //         console.log("user is logged");
  //         this.checkTheProgramAgainAndAgain;
  //       } else {
  //         // this.state.dbulref.off('value');
  //         this.props.navigation.dispatch(
  //           NavigationActions.navigate({ routeName: "LoginScreen" })
  //         );
  //       }
  //     });

  //     this.retrieveItem("PROGRAM_FILE")
  //       .then((response) => {
  //         //this callback is executed when your Promise is resolved

  //         console.log(response);

  //         var nameFile = response;
  //         var atIndex = nameFile.indexOf(",");
  //         var nameStart = nameFile.substr(atIndex + 1);
  //         nameStart = nameStart.split(" ").join("");
  //         this.setState({ myFirstNameIs: nameStart });
  //       })
  //       .catch((error) => {
  //         //this callback is executed when your Promise is rejected
  //         console.log("Promise is rejected with error: " + error);
  //       });
  //   }

  //   componentWillUnmount() {
  //     this.state.dbulref.off("value");
  //   }

  //   /* ======================================================= */

  //   checkTheProgramAgainAndAgain() {
  //     this.retrieveItem("PROGRAM_FILE")
  //       .then((promiseResponse) => {
  //         //this callback is executed when your Promise is resolved

  //         this.setState({ selectedName: promiseResponse });

  //         var programsRef = firebase.database().ref(promiseResponse + "/Program");

  //         // Get reference to dbulref
  //         this.setState({ dbulref: programsRef });

  //         programsRef.on("value", (snapshot) => {
  //           var returnArr = [];

  //           // Note: Child is just the top-level object, but includes all the little keys beneath
  //           snapshot.forEach((child) => {
  //             var programChildName = child.key;

  //             if (programChildName.includes("-0")) {
  //               // Check complete timestamp before showing!
  //               var programChildren = child.val().STATUS;

  //               if (programChildren == "Complete") {
  //                 var completeTimestamp = child.val().COMPLETE_TIMESTAMP;

  //                 if (completeTimestamp != null) {
  //                   // 1 week is 604800
  //                   if (completeTimestamp > Date.now() - 1209600) {
  //                     returnArr.push(child.val());
  //                   }
  //                 } else {
  //                   console.log(
  //                     "SPINDLE WARNING: Complete program has no timestamp!"
  //                   );
  //                   returnArr.push(child.val());
  //                 }
  //               } else {
  //                 returnArr.push(child.val());
  //                 // console.log('A_CHILD: ' + child.key);
  //               }
  //             }
  //           });

  //           returnArr.sort(function(a, b) {
  //             return a.PRO_NUMBER - b.PRO_NUMBER;
  //           });
  //           returnArr.reverse();

  //           this.setState({
  //             arrData: returnArr,
  //             isLoading: false,
  //           });

  //           // console.log(this.state.arrData)
  //         });
  //       })
  //       .catch((error) => {
  //         //this callback is executed when your Promise is rejected
  //         console.log("Promise is rejected with error: " + error);
  //       });
  //   }

  /* ======================================================= */

  render() {
    return (
      <View style={styles.container}>
        {/* <NavigationEvents
          onDidFocus={() => {
            // Do your things here
            console.log("About to fire a refresh!");
            this.checkTheProgramAgainAndAgain();
          }}
        /> */}

        {/* <ScrollView>
          {this.state.isLoading == true ? (
            <ActivityIndicator
              size="large"
              color="#F36E54"
              style={styles.loadingSpinner}
            />
          ) : null}

          <List containerStyle={{ marginBottom: 20, width: "100%" }}>
            {this.state.arrData.map((item, i) => (
              <ListItem
                hideChevron={true}
                leftIcon={
                  <Icon
                    name={
                      item.STATUS === "Complete" ? "check-circle" : "circle"
                    }
                    type="feather"
                    iconStyle={styles.programIcon}
                    color={item.STATUS === "Complete" ? "#F36E54" : "#38a8b7"}
                  />
                }
                key={i}
                title={this.state.myFirstNameIs + " " + item.PROGRAM_ID}
                subtitle={item.STATUS}
                onPress={() =>
                  this.props.navigation.navigate("Details", {
                    programNumber: item.PROGRAM_ID,
                    theChosenName: this.state.selectedName,
                  })
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
  programIcon: {
    marginRight: 8,
  },
  packageIcon: {
    marginRight: 8,
  },
});
