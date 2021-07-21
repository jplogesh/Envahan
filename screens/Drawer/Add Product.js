import React, { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";

import { useFonts } from "expo-font";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const AddProduct = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const clickHandler = () => {
    navigation.navigate("Dashboard");
  };
  const clickHandler1 = () => {
    navigation.navigate("Home");
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
          <Text style={styles.tit1}>Trip # 1234 - Customer Name</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.txt}> Product Name :</Text>
          <TextInput
            style={styles.txtip}
            // placeholder="Options >"
            keyboardType="default"
          />
          <Text style={styles.txt}>UOM :</Text>
          <TextInput style={styles.txtip} keyboardType="default" />
          <Text style={styles.txt}>Weight :</Text>
          <TextInput style={styles.txtip} keyboardType="default" />
          <Text style={styles.txt}>Value :</Text>
          <TextInput style={styles.txtip} keyboardType="default" />
          <Text style={styles.txt}>Eway Bill :</Text>
          <TextInput style={styles.txtip} keyboardType="default" />

          <Text style={styles.txt}>Upload Invoices :</Text>
          <TextInput style={styles.txtip} keyboardType="default" />
          <TouchableOpacity style={styles.plusicon}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
          {/* <Button title="Save" /> */}
          {/* <Text>asdfdfa</Text> */}
          <TouchableOpacity style={{ paddingBottom: 50, paddingTop: 10 }}>
            <Text
              style={styles.btntxt}
              onPress={() => setModalVisible(!modalVisible)}
            >
              Add Product
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
                <Text style={styles.modalText}>
                  Product Added Successfully!
                </Text>
                <TouchableOpacity style={[styles.button, styles.buttonClose]}>
                  <Text style={styles.textStyle} onPress={clickHandler}>
                    Add Another Product
                  </Text>
                </TouchableOpacity>
                <Text style={{ color: "transparent" }}> hiii</Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose, styles.second]}
                >
                  <Text style={styles.textStyle} onPress={clickHandler1}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
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
    // fontFamily: "Roboto Slab",
    height: 50,
    // textAlign: "center",
    justifyContent: "center",
    // alignItems: "center",
    textAlignVertical: "center",
    backgroundColor: "#6d42f9",
    // color: "white",
    width: widthPercentageToDP("100%"),
    // flexDirection: "row",
    // justifyContent: "space-evenly",
  },
  tit1: {
    // flexDirection: "row",
    // textAlign: "center",
    // marginTop: 10,
    // fontSize: 17,
    paddingHorizontal: 40,
    color: "white",
    // fontWeight: "bold",
    fontFamily: "Roboto Slab",
    // borderRightWidth: 1,
    borderColor: "white",
    // paddingRight: 70,
    fontSize: RFValue(15),
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
    marginTop: heightPercentageToDP("-3%"),
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
  second: {
    marginTop: 10,
  },
});
