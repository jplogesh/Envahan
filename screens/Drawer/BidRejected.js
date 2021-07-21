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
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const BidRejected = ({ navigation }) => {
  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const curReq = () => {
    navigation.navigate("Bidding Request");
  };
  const curAcpt = () => {
    navigation.navigate("Bid Accepted");
  };
  const curRej = () => {
    navigation.navigate("Bid Rejected");
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
          <Text style={styles.tit1} onPress={curReq}>
            Current Request
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tit2} onPress={curAcpt}>
            Accepted
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tit1} onPress={curRej}>
            Rejected
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <MyBid bidbtn1="Rejected" bidid={564123} bidtime="04 Nov 6:10 PM" />
        <MyBid bidbtn1="Rejected" bidid={123565} bidtime="11 Aug 5:40 PM" />
        <MyBid bidbtn1="Rejected" bidid={534545} bidtime="24 July 7:55 PM" />
        <MyBid bidbtn1="Rejected" bidid={564123} bidtime="04 Nov 6:10 PM" />
        <MyBid bidbtn1="Rejected" bidid={123565} bidtime="11 Aug 5:40 PM" />
        <MyBid bidbtn1="Rejected" bidid={534545} bidtime="24 July 7:55 PM" />
        {/* <MyBid bidbtn1="Bid Now" bidid={768765} bidtime="01 Jan 1:10 PM" /> */}
      </ScrollView>
    </View>
  );
};

export default BidRejected;

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
});
