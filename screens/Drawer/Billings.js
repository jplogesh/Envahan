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
import { FontAwesome5 } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const Billings = ({ navigation }) => {
  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const addDriver = () => {
    navigation.navigate("Add Driver");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/dpicon.png")} style={styles.dp} />
        <Text style={styles.tit}>ABT Transport</Text>
      </View>
      <TouchableOpacity></TouchableOpacity>
      <View style={styles.titcontainer}>
        <TouchableOpacity>
          <Text style={styles.tit1}>Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tit2}>Balance</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.tit1}>Rejected</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.tit3container}>
        <Text style={styles.tit3}>22 - 03 to 29 - 03</Text>
        <Text style={styles.tit3}>22 - 03 to 29 - 03</Text>
        <Text style={styles.tit3}>22 - 03 to 29 - 03</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tripcash}>
          <View style={styles.tripcash1}>
            <FontAwesome5 name="trophy" size={24} color="black" />
            <Text style={styles.tit4}> Rs. 57,500</Text>
          </View>
          <View style={styles.tripcash1}>
            <FontAwesome5 name="car-side" size={24} color="black" />
            <Text style={styles.tit4}> 7 Trips</Text>
          </View>
        </View>
        <MyBid bidid={6549873} bidbtn1="Rs.2500.00" bidtime="05 nov 5:30 AM" />
        <MyBid bidid={6549873} bidbtn1="Rs.2500.00" bidtime="05 nov 5:30 AM" />
        <MyBid bidid={6549873} bidbtn1="Rs.2500.00" bidtime="05 nov 5:30 AM" />
        {/* <MyBid bidid="Driver John" bidbtn1="Loading" /> */}
      </ScrollView>
    </View>
  );
};

export default Billings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    width: widthPercentageToDP("100%"),
    height: heightPercentageToDP("100%"),
  },
  dp: {
    resizeMode: "contain",
    height: heightPercentageToDP("8%"),
    width: widthPercentageToDP("13%"),
    // backgroundColor: "orange",
    marginLeft: widthPercentageToDP("7%"),
  },
  header: {
    flexDirection: "row",
    // justifyContent: "flex-start",
    // marginLeft: 0,
    // marginTop: 25,
    paddingBottom: 20,
    backgroundColor: "#6d42f9",
    width: widthPercentageToDP("100%"),
    paddingTop: 35,
    borderBottomWidth: 0.5,
    borderColor: "#D8D8D8",
  },
  tit: {
    // flexDirection: "row",
    textAlign: "center",
    marginTop: heightPercentageToDP("2%"),
    fontSize: RFValue(18),
    marginLeft: widthPercentageToDP("5%"),
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
    fontSize: RFValue(15),
    paddingHorizontal: 2,
    color: "white",
    // fontWeight: "bold",
    fontFamily: "Roboto Slab",
  },
  tit2: {
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
    borderColor: "white",
    color: "white",
    paddingHorizontal: 20,
    fontFamily: "Roboto Slab",
    fontSize: RFValue(15),
  },
  tit3container: {
    marginTop: heightPercentageToDP("0.5%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tit3: {
    fontFamily: "Roboto Slab",
    backgroundColor: "#6d42f9",
    borderWidth: 1,
    borderRadius: 5,
    color: "white",
    paddingHorizontal: 10,
    marginHorizontal: widthPercentageToDP("7%"),
    // marginRight: 80,
    borderColor: "transparent",
    padding: 5,
    margin: 10,
    fontSize: RFValue(13),
  },
  tripcash: {
    height: heightPercentageToDP("13%"),
    backgroundColor: "#F2F2F2",
    borderRadius: 15,
  },
  tripcash1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: heightPercentageToDP("2.3%"),
  },
  tit4: {
    fontFamily: "Roboto Slab",
    marginLeft: 13,
    fontSize: RFValue(13),
  },
});
