import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
// import MyIcon from "../../components/MyIcon";
import { useFonts } from "expo-font";
import MyBid from "../../components/MyBid";
import MyBid1 from "../../components/MyBid1";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const YourDrivers = ({ navigation }) => {
  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const addDriver = () => {
    navigation.navigate("Add Driver");
  };
  const load = () => {
    navigation.navigate("Loading");
  };
  const alert = () => {
    Alert.alert(
      "Hey There!",
      "Two button alert dialog",
      [
        { text: "Yes", onPress: () => console.log("Yes button clicked") },
        {
          text: "No",
          onPress: () => console.log("No button clicked"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/dpicon.png")} style={styles.dp} />
        <Text style={styles.tit}>ABT Transport</Text>
      </View>
      <TouchableOpacity></TouchableOpacity>
      <View style={styles.titcontainer}>
        {/* <TouchableOpacity> */}
        <Text style={styles.tit1}>Driver List</Text>
        {/* </TouchableOpacity> */}
        <TouchableOpacity>
          <Text style={styles.tit2} onPress={addDriver}>
            Add Driver
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.tit1}>Rejected</Text>
        </TouchableOpacity> */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <MyBid1 bidid="Driver Mike" bidbtn1="Assign" onPress={alert} />
        <MyBid1 bidid="Driver Zake" bidbtn1="Assign" onPress={alert} />

        <MyBid bidid="Driver Duke" bidbtn1="Loading" onPress={load} />
        <MyBid bidid="Driver Jake" bidbtn1="Unloading" />
        <MyBid bidid="Driver Duke" bidbtn1="Loading" onPress={load} />
        <MyBid bidid="Driver Jake" bidbtn1="Unloading" />
        {/* <MyBid bidid="Driver John" bidbtn1="Loading" /> */}
      </ScrollView>
    </View>
  );
};

export default YourDrivers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    height: "100%",
  },
  dp: {
    resizeMode: "contain",
    height: 50,
    width: 50,
    // backgroundColor: "orange",
    marginLeft: 15,
  },
  header: {
    flexDirection: "row",
    // justifyContent: "flex-start",
    marginLeft: 0,
    // marginTop: 25,
    paddingBottom: 20,
    backgroundColor: "#6d42f9",
    width: "100%",
    paddingTop: 35,
    borderBottomWidth: 0.5,
    borderColor: "#D8D8D8",
  },
  tit: {
    // flexDirection: "row",
    textAlign: "center",
    marginTop: 10,
    fontSize: RFValue(18),

    marginLeft: 30,
    color: "white",
    // fontWeight: "bold",
    fontFamily: "Roboto Slab",
  },
  titcontainer: {
    fontFamily: "Roboto Slab",
    height: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    backgroundColor: "#6d42f9",
    color: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tit1: {
    // flexDirection: "row",
    // textAlign: "center",
    // marginTop: 10,
    // fontSize: 17,
    paddingHorizontal: 5,
    color: "white",
    // fontWeight: "bold",
    fontFamily: "Roboto Slab",
    // borderRightWidth: 1,
    borderColor: "white",
    paddingRight: 70,
    fontSize: RFValue(15),
  },
  tit2: {
    // borderLeftWidth: 1,
    color: "white",
    paddingHorizontal: 20,
    fontFamily: "Roboto Slab",
    fontSize: RFValue(15),
  },
});
