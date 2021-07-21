import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const MyBid1 = ({ bidid, bidbtn1 }) => {
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
        <Text style={styles.bidId}>{bidid}</Text>
        <View style={styles.bidbtn}>
          <TouchableOpacity style={styles.bidbtn}>
            <Text style={styles.btn}>{bidbtn1}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.bidId, styles.bidId1]}>No Trip Assigned Yet</Text>
    </View>
  );
};

export default MyBid1;

const styles = StyleSheet.create({
  mybid: {
    height: heightPercentageToDP("17%"),
    borderWidth: 1,
    marginTop: 13,
    borderRadius: 15,
    width: widthPercentageToDP("85%"),
    alignSelf: "center",
    backgroundColor: "#F2F2F2",
    borderColor: "#6d42f9",
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
    paddingTop: 20,
    fontSize: RFValue(17),
  },
  btn: {
    fontFamily: "Roboto Slab",
    borderWidth: 1,
    height: heightPercentageToDP("4%"),
    textAlignVertical: "center",
    // width: "100%",
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#ecc8ce",
    borderColor: "transparent",
    marginRight: 15,
    fontSize: RFValue(16),
    color: "#e27577",
  },

  bidId1: {
    marginTop: "-10%",
    // marginLeft: 50,
    textAlign: "center",
    fontSize: RFValue(17),
  },
});
