import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import { OtpValidator } from "../Drawer/OtpValidator";
import { MobileValidator } from "../Drawer/MobileValidator";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const Reset = ({ navigation }) => {
  const [mobilenumber, setMobilenumber] = useState({ value: "", error: "" });

  const loginHandler = () => {
    const mobilenumberError = MobileValidator(mobilenumber.value);
    if (mobilenumberError) {
      setMobilenumber({ ...mobilenumber, error: mobilenumberError });
      return;
    }
    navigation.navigate("Login");
  };

  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  clickHandler = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>eNVahan</Text>
      <Image style={styles.logo} source={require("../../assets/en4.jpg")} />
      <Text style={styles.tit}>Reset Password</Text>
      <View style={styles.container1}>
        <Text style={styles.ipfld}>Registered Mobile Number</Text>
        <TextInput
          style={styles.txtip}
          placeholder=" Enter valid Mobile number..."
          keyboardType="number-pad"
          value={mobilenumber.value}
          onChangeText={(text) => setMobilenumber({ value: text, error: "" })}
          error={!!mobilenumber.error}
          errorText={mobilenumber.error}
          autoCapitalize="none"
          //   selectionColor="green"
        />
      </View>
      <Text style={{ color: "transparent" }}>hiii</Text>

      <TouchableOpacity style={styles.btnwrapper} onPress={loginHandler}>
        <Text style={styles.btn}>Send </Text>
      </TouchableOpacity>
      <Text style={{ color: "transparent" }}>hiii</Text>
      <Text style={styles.desc} numberOfLines={2}>
        You will receive a message with {"\n"} password reset link.
      </Text>
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
  container: {
    // fontSize:30,

    backgroundColor: "white",
    height: heightPercentageToDP("100%"),
    width: widthPercentageToDP("100%"),
  },
  container1: {
    // fontSize:30,

    // backgroundColor: "white",
    // margin: "5%",
    height: heightPercentageToDP("21%"),
    paddingBottom: 15,
    marginTop: heightPercentageToDP("1%"),
    width: widthPercentageToDP("65%"),
    // alignItems: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: RFValue(27),
    // fontWeight:'bold',
    marginTop: heightPercentageToDP("12%"),
    alignSelf: "center",
    // paddingTop: 20,
    fontFamily: "Roboto Slab",
  },
  tit: {
    fontSize: RFValue(16),
    // fontWeight:'bold',
    marginTop: heightPercentageToDP("-10%"),
    alignSelf: "center",
    fontFamily: "Roboto Slab",
    // marginTop: -20,
  },

  logo: {
    // fontSize:30,
    marginTop: heightPercentageToDP("-7%"),
    alignSelf: "center",
    resizeMode: "contain",
    height: heightPercentageToDP("45%"),

    width: widthPercentageToDP("70%"),
  },
  btn: {
    // fontSize:30,
    marginTop: heightPercentageToDP("-5%"),
    alignSelf: "center",
    color: "white",
    borderWidth: 1,
    width: widthPercentageToDP("22%"),

    textAlign: "center",
    height: heightPercentageToDP("5%"),
    // padding: 8,
    borderRadius: 13,
    borderColor: "transparent",
    backgroundColor: "#6d42f9",
    textAlignVertical: "center",
    fontSize: RFValue(15),

    // fontWeight:'bold',
    fontFamily: "Roboto Slab",
  },
  btnwrapper: {
    marginTop: heightPercentageToDP("-5%"),
    // paddingBottom: -50,
  },

  ipfld: {
    fontSize: RFValue(13),
    marginTop: heightPercentageToDP("1.5%"),
    // alignSelf: "center",
    // textAlign: "center",
    paddingBottom: "4%",
    // fontWeight:'bold',
    fontFamily: "Roboto Slab",
    paddingLeft: 5,
  },
  q: {
    fontSize: RFValue(14),
    fontFamily: "Roboto Slab",
    textAlign: "center",
    // marginTop: 15,
    // marginBottom: 20,
    // backgroundColor: "white",
  },

  desc: {
    fontFamily: "Roboto Slab",
    fontSize: RFValue(12),

    // position: "absolute",
    marginTop: heightPercentageToDP("0.3%"),
    // marginLeft: 30,
    textAlign: "center",
    alignSelf: "center",
    color: "black",
    // backgroundColor: "grey",
  },
  txtip: {
    borderWidth: 1,
    height: heightPercentageToDP("5%"),
    // paddingBottom: 10,
    borderRadius: 13,
    paddingLeft: 8,
    borderColor: "grey",
  },
});
