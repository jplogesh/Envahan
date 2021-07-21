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

const Upcoming = ({ navigation }) => {
  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const clickHandler1 = () => {
    navigation.navigate("Upcoming");
  };
  const clickHandler2 = () => {
    navigation.navigate("Trip Ongoing");
  };
  const clickHandler3 = () => {
    navigation.navigate("Completed");
  };
  const clickHandler4 = () => {
    navigation.navigate("Cancelled");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/dpicon.png")} style={styles.dp} />
        <Text style={styles.tit}>ABT Transport</Text>
      </View>
      {/* <TouchableOpacity></TouchableOpacity> */}
      <View style={styles.titcontainer}>
        <TouchableOpacity>
          <Text style={styles.tit1} onPress={clickHandler1}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tit2} onPress={clickHandler2}>
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tit3} onPress={clickHandler3}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tit1} onPress={clickHandler4}>
            Cancelled
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.jobid}>JOB ID : 564564</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <MyBid bidbtn1="Assign" bidid={564565} bidtime="05 Nov 6:10 PM" /> */}
        <MyBid bidbtn1="Yet to Start" bidid={564565} bidtime="05 Nov 3:10 PM" />
        {/* <MyBid bidbtn1="Assign" bidid={564565} bidtime="05 Nov 6:10 PM" /> */}
        <MyBid bidbtn1="Yet to Start" bidid={564123} bidtime="05 Nov 6:10 PM" />
        <MyBid bidbtn1="Yet to Start" bidid={564565} bidtime="05 Nov 3:10 PM" />
      </ScrollView>
    </View>
  );
};

export default Upcoming;

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
    justifyContent: "space-around",
    alignItems: "center",
    textAlignVertical: "center",
    backgroundColor: "#6d42f9",
    color: "white",
    width: "100%",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  tit1: {
    // flexDirection: "row",
    // textAlign: "center",
    // marginTop: 10,
    // fontSize: 17,
    paddingHorizontal: 2,
    color: "white",
    // fontWeight: "bold",
    fontSize: RFValue(15),
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
  tit3: {
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
    borderColor: "white",
    color: "white",
    paddingLeft: 0,
    paddingRight: 20,
    fontFamily: "Roboto Slab",
    fontSize: RFValue(15),
  },
  jobid: {
    marginTop: "2%",
    justifyContent: "flex-start",
    // textAlign: "start",
    marginLeft: "-50%",
    fontFamily: "Roboto Slab",
    fontSize: RFValue(17),
  },
});
