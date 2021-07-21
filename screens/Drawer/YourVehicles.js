import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import MyIcon from "../../components/MyIcon";
import { useFonts } from "expo-font";
import MyBid from "../../components/MyBid";
import MyBid1 from "../../components/MyBid1";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const YourVehicles = ({ navigation }) => {
  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const addVehicle = () => {
    navigation.navigate("Add Vehicle");
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
        <Text style={styles.tit1}>Vehicle List</Text>
        {/* </TouchableOpacity> */}
        <TouchableOpacity>
          <Text style={styles.tit2} onPress={addVehicle}>
            Add Vehicle
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.tit1}>Rejected</Text>
        </TouchableOpacity> */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <MyBid bidid="TN36T5245" bidbtn1="Loading" bidtime="05 Nov 6:10 PM" />
        <MyBid1
          bidid="TN98T7678"
          bidbtn1="At Pickup"
          bidtime="05 Nov 6:10 PM"
        />
        <MyBid bidid="TN55T4477" bidbtn1="Unloading" bidtime="05 Nov 6:10 PM" />
        {/* <MyBid bidid="Driver John" bidbtn1="Loading" /> */}
      </ScrollView>
    </View>
  );
};

export default YourVehicles;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // flex: 1,
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
    borderRightWidth: 1,
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
