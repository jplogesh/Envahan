import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const MyBid = ({ bidid, bidbtn1, bidtime, onPress }) => {
  // const navigation = useNavigation();

  const [loaded] = useFonts({
    "Roboto Slab": require("../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.mybid}>
      <View style={styles.bidcontainer}>
        <Text style={styles.bidId} numberOfLines={1}>
          {bidid}
        </Text>
        <View style={styles.bidbtn}>
          <TouchableOpacity style={styles.bidbtn}>
            <Text style={styles.btn} onPress={onPress}>
              {bidbtn1}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.time}>{bidtime}</Text>
      <View style={styles.addrcontainer}>
        <Ionicons
          name="ios-location-sharp"
          size={24}
          color="#0040FF"
          style={styles.icon}
        />
        <Text style={styles.addr}>18656 Tillman Plain,North Glennatown.</Text>
      </View>
      <View style={styles.addrcontainer1}>
        <Ionicons
          name="ios-location-sharp"
          size={24}
          color="orange"
          style={styles.icon}
        />
        <Text style={styles.addr}>18656 Tillman Plain,North Glennatown.</Text>
      </View>
    </View>
  );
};

export default MyBid;

const styles = StyleSheet.create({
  mybid: {
    flex: 1,
    height: heightPercentageToDP("19%"),
    borderWidth: 1,
    marginTop: "3%",
    borderRadius: 15,
    width: widthPercentageToDP("85%"),
    // alignSelf: "center",
    backgroundColor: "#F2F2F2",
    borderColor: "#6d42f9",
    // borderColor:""
  },
  bidcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bidId: {
    fontWeight: "bold",
    color: "#6d42f9",
    // fontFamily: "Roboto Slab",
    marginLeft: 20,
    // paddingTop: 10,
    fontSize: RFValue(17),
    // paddingBottom: 10,
    // marginBottom: 10,
    // marginTop: 5,
  },
  btn: {
    // fontFamily: "Roboto Slab",
    borderWidth: 1,
    height: heightPercentageToDP("4%"),

    textAlignVertical: "center",
    // width: "100%",
    paddingHorizontal: 10,
    marginTop: 25,
    borderRadius: 15,
    backgroundColor: "#ecc8ce",
    borderColor: "transparent",
    marginRight: 15,
    fontSize: RFValue(16),
    color: "#e27577",
  },
  time: {
    // fontWeight: "bold",
    color: "black",
    fontFamily: "Roboto Slab",
    marginLeft: 20,
    // paddingTop: -20,
    marginTop: -30,
    fontSize: RFValue(16),
  },
  addrcontainer: {
    marginTop: 10,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginLeft: 5,
  },
  addrcontainer1: {
    flexDirection: "row",
    // borderBottomWidth: 0.5,
    marginTop: 10,
    paddingBottom: 10,
    marginLeft: 5,
  },
  addr: {
    fontSize: RFValue(13),

    fontFamily: "Roboto Slab",
    marginLeft: 10,
  },
});
