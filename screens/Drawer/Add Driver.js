import React, { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
// import MyIcon from "../../components/MyIcon";
import { useFonts } from "expo-font";
import MyBid from "../../components/MyBid";
import MyBid1 from "../../components/MyBid1";
import { AntDesign } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const AddDriver = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  //   const curReq = () => {
  //     navigation.navigate("Bidding Page");
  //   };

  const clickHandler = () => {
    navigation.navigate("Your Drivers");
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
          <Text style={styles.tit1}>Add Driver</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>Driver Name</Text>
      <TextInput style={styles.txtip} keyboardType="default" />
      <Text style={styles.txt}>Password</Text>
      <TextInput style={styles.txtip} keyboardType="default" />
      <Text style={styles.txt}>Email</Text>
      <TextInput style={styles.txtip} keyboardType="default" />
      <Text style={styles.txt}>Upload Documents</Text>
      <TextInput
        style={styles.txtip}
        keyboardType="default"
        placeholder="Choose file to upload..."
      />
      <TouchableOpacity style={styles.plusicon}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.btntxt}
          onPress={() => setModalVisible(!modalVisible)}
        >
          Add Driver
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Driver Added Successfully!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={clickHandler}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddDriver;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    // flex: 1,
    height: heightPercentageToDP("100%"),
    width: widthPercentageToDP("100%"),
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
    // fontFamily: "Roboto Slab",
    height: heightPercentageToDP("6%"),
    // textAlign: "center",
    justifyContent: "center",
    // alignItems: "center",
    textAlignVertical: "center",
    backgroundColor: "#6d42f9",
    // color: "white",
    width: "100%",
    // flexDirection: "row",
    // justifyContent: "space-evenly",
  },
  tit1: {
    // flexDirection: "row",
    // textAlign: "center",
    // marginTop: 10,
    // fontSize: 17,
    paddingHorizontal: 30,
    color: "white",
    // fontWeight: "bold",
    fontFamily: "Roboto Slab",
    borderRightWidth: 1,
    borderColor: "grey",
    // paddingRight: 70,
    fontSize: RFValue(18),
  },
  txt: {
    // fontFamily: "Roboto Slab",
    // justifyContent: "flex-start",
    paddingLeft: widthPercentageToDP("15%"),

    fontSize: RFValue(15),

    // marginLeft: "6%",
    paddingTop: 10,
    color: "grey",
    paddingBottom: 7,
  },
  txtip: {
    backgroundColor: "#fccfd7",
    width: widthPercentageToDP("70%"),

    height: heightPercentageToDP("6%"),
    alignSelf: "center",
    // marginLeft: 20,
    fontSize: RFValue(13),
    paddingLeft: 10,
  },
  btntxt: {
    marginTop: heightPercentageToDP("2%"),
    borderRadius: 10,
    borderWidth: 1,
    width: widthPercentageToDP("40%"),
    alignSelf: "center",
    textAlign: "center",
    height: heightPercentageToDP("6%"),
    textAlignVertical: "center",
    backgroundColor: "#6d42f9",
    color: "white",
    fontFamily: "Roboto Slab",
    fontSize: RFValue(17),

    borderColor: "transparent",
  },
  plusicon: {
    marginLeft: widthPercentageToDP("76.3%"),
    marginTop: heightPercentageToDP("-4.7%"),
    width: widthPercentageToDP("10%"),
    height: heightPercentageToDP("10%"),
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
    padding: 45,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 7,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 5,
    // fontFamily: "Roboto Slab",
    // width: "100%",
    paddingHorizontal: 20,
  },

  buttonClose: {
    backgroundColor: "#6d42f9",
    fontFamily: "Roboto Slab",
  },
  textStyle: {
    color: "white",
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto Slab",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Roboto Slab",
    lineHeight: 30,
  },
  details: {
    paddingTop: 10,
  },
});
