import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import MyIcon from "../../components/MyIcon";
import { Ionicons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Ionicons
            style={styles.menu}
            name="ios-menu"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <Text> Profile Screen</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  overlay: {
    // position: "absolute",
    marginTop: -580,
    // backgroundColor: "green",
    // flexDirection: "column-reverse",
    marginLeft: "-75%",
  },
  menu: {
    // marginTop: -20,
    marginLeft: "3%",
    // backgroundColor: "grey",
    // position: "absolute",
    top: 0,
  },
});
