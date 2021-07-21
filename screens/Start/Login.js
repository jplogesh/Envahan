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
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import { emailValidator } from "../Drawer/em";
import { passwordValidator } from "../Drawer/PasswordValidator";
import { MobileValidator } from "../Drawer/MobileValidator";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const Login = ({ navigation }) => {
  const [mobilenumber, setMobilenumber] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const clickHandler = () => {
    navigation.navigate("Dashboard");
  };
  const resetHandler = () => {
    navigation.navigate("Reset");
  };

  const loginHandler = () => {
    const mobilenumberError = MobileValidator(mobilenumber.value);
    const passwordError = passwordValidator(password.value);
    if (mobilenumberError || passwordError) {
      setMobilenumber({ ...mobilenumber, error: mobilenumberError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>eNVahan</Text>
      <Image style={styles.logo} source={require("../../assets/en4.jpg")} />
      <View style={styles.container1}>
        <Text style={styles.ipfld}>Mobile Number</Text>
        <TextInput
          style={styles.txtip}
          placeholder="Enter Valid Mobile Number..."
          keyboardType="number-pad"
          selectionColor="green"
          returnKeyType="done"
          value={mobilenumber.value}
          onChangeText={(Number) =>
            setMobilenumber({ value: Number, error: "" })
          }
          error={!!mobilenumber.error}
          errorText={mobilenumber.error}
          keyboardAppearance="dark"
        />

        <Text style={styles.ipfld}>Password</Text>
        <TextInput
          style={styles.txtip}
          placeholder="********"
          keyboardType="default"
          secureTextEntry
          selectionColor="red"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry={true}
          keyboardAppearance="dark"
          // keyboardType=
        />
      </View>
      <Text style={{ color: "transparent", paddingBottom: 10 }}>
        hiyfyjfhmcmncggtcghii
      </Text>
      <View>
        <TouchableOpacity style={styles.btnwrapper}>
          <Text style={styles.btn} onPress={clickHandler}>
            SignIn
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "transparent" }}>hhgcfmtfrtdgcvcbdvbddhgiii</Text>
        <Text style={{ color: "transparent" }}>hhgcfmtfrtdgcvcbdvbddhgiii</Text>

        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.q} onPress={resetHandler}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        {/* <Pressable style={styles.forgot}>
          <Text>Forgot Password?</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // fontSize:30,

    backgroundColor: "white",
    width: widthPercentageToDP("100%"),

    height: heightPercentageToDP("100%"),
  },
  container1: {
    // fontSize:30,

    // backgroundColor: "white",
    // margin: "5%",
    height: heightPercentageToDP("21%"),
    paddingBottom: 15,
    marginTop: heightPercentageToDP("-8%"),
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
    marginTop: heightPercentageToDP("-1%"),
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
    // marginTop:
    // marginBottom: heightPercentageToDP("1%"),
    // paddingBottom: 20,
  },

  ipfld: {
    fontSize: RFValue(14),

    marginTop: heightPercentageToDP("1.5%"),
    // alignSelf: "center",
    // textAlign: "center",
    paddingBottom: "2%",
    // fontWeight:'bold',
    fontFamily: "Roboto Slab",
  },
  q: {
    fontSize: RFValue(12),

    fontFamily: "Roboto Slab",
    textAlign: "center",
    marginTop: heightPercentageToDP("-2%"),
    // marginBottom: 20,
    // backgroundColor: "white",
    // paddingBottom: 20,
  },

  // forgot: {
  //   marginTop: heightPercentageToDP("0.5%"),
  //   // paddingBottom: -50,
  // },
  txtip: {
    borderWidth: 1,
    height: heightPercentageToDP("5%"),
    // paddingBottom: 10,
    borderRadius: 13,
    paddingLeft: 8,
    borderColor: "grey",
  },
});
