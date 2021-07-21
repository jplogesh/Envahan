import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";
// import MyIcon from "../../components/MyIcon";
import MapView, { Callout, Circle, Marker, Overlay } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Loading = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { width, height } = Dimensions.get("window");
  const [pin, setPin] = useState({
    latitude: 11.044341941487508,
    longitude: 77.0383614542556,
  });
  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts//RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const clickHandler = () => {
    navigation.navigate("Add Product");
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 11.044341941487508,
          longitude: 77.0383614542556,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        {/* <Marker
          coordinate={pin}
          pinColor="#5155FF"
          draggable={true}
          onDragStart={(e) => {
            console.log("drag start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>Hiii Im here only</Text>
          </Callout>
        </Marker> */}
        {/* <Circle center={pin} radius={1000} fillColor="transparent" /> */}
      </MapView>
      {/* <View style={{ width, height }}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
          style={styles.overlay}
        >
          <Ionicons
            style={styles.menu}
            name="ios-menu"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View> */}
      <View style={styles.container1}>
        <View style={styles.addrwrapper}>
          <Ionicons
            name="ios-location-sharp"
            size={21}
            color="#FF4000"
            style={styles.icon}
          />
          <Text style={styles.text}> Chitra,Coimbatore,India</Text>
        </View>
        <View style={styles.addrwrapper1}>
          <Ionicons
            name="ios-location-sharp"
            size={21}
            color="#0040FF"
            style={styles.icon}
          />
          <Text style={styles.text}> Ukkadam,Coimbatore,India</Text>
        </View>

        <AntDesign
          name="calendar"
          size={24}
          color="black"
          style={styles.icon1}
        />
        <Text style={styles.text1}>07/24/2021</Text>
        <View style={styles.vehicledetails}>
          <View style={styles.imgcontainer}>
            <View style={styles.img1}>
              <Image
                style={styles.img}
                source={require("../../assets/tc.png")}
              />
            </View>
            <View style={styles.details}>
              <Text style={styles.tataname}>Tata Ace</Text>
              <Text style={styles.payload}>900 kg Payload</Text>
            </View>
          </View>
          <View style={styles.countdetails}>
            <Text style={styles.vno}>5</Text>
            <Text style={styles.vtxt}>Vehicles</Text>
          </View>
        </View>
        <View style={styles.bidamtc}>
          <TextInput
            style={styles.bidamt}
            placeholder="Your Bid Amount: Rs. 5000 "
          />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text onPress={clickHandler} style={styles.btntxt}>
              Add Product +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container5}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/dpicon.png")}
            style={styles.dp}
          />
          <Text style={styles.tit}>ABT Transport</Text>
        </View>
        <View style={styles.titcontainer}>
          <Text style={styles.tit1}>Bid ID #526354 - From Samsung</Text>
        </View>
        <View style={styles.timer}>
          <Text style={styles.t1}>5:21</Text>
          <Text style={styles.t2}>time left</Text>
        </View>
        {/* <Modal
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
                Your Bidding Confirmed {"\n"} Start assigning Driver
              </Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={clickHandler}
              >
                <Text style={styles.textStyle}>Assign Driver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}
      </View>
    </View>
  );
};

// }}
export default Loading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    // flexWrap: "nowrap",
  },
  container5: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // marginTop: "5%",
    // flex: 2,
    // opacity: 0.5,
    // backgroundColor: "green",
  },
  menu: {
    // marginTop: -20,
    marginLeft: "20%",
    // backgroundColor: "grey",
    // position: "absolute",
    top: 0,
  },
  overlay: {
    position: "absolute",
    marginTop: -720,
    // backgroundColor: "green",
    // flexDirection: "column-reverse",
  },
  container1: {
    backgroundColor: "#FAFAFA",
    opacity: 0.85,
    position: "absolute",
    // marginTop: 700,
    alignItems: "flex-start",
    height: "45%",
    width: "90%",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
    // flexWrap: "nowrap",
    // marginBottom: 10,
    bottom: 0,
    // paddingBottom: -10,
  },
  addrwrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  addrwrapper1: {
    flex: 1,
    flexDirection: "row",
    marginTop: -280,
    justifyContent: "space-around",
  },
  text: {
    fontSize: 15,
    fontFamily: "Roboto Slab",
    marginLeft: 10,
    marginTop: 5,
  },
  icon: {
    marginLeft: 10,
    marginTop: 5,
  },

  icon1: {
    position: "absolute",
    marginLeft: 10,
    marginTop: 80,
    //
  },
  text1: {
    fontSize: 15,
    position: "absolute",

    fontFamily: "Roboto Slab",
    marginLeft: 50,
    marginTop: 80,
    // backgroundColor: "grey",
  },
  img: {
    resizeMode: "contain",
    height: 50,
    width: 50,
    paddingTop: 15,
  },
  imgcontainer: {
    flexDirection: "row",
    borderRightWidth: 1,
    borderColor: "grey",
    paddingTop: 15,
  },
  vehicledetails: {
    borderWidth: 1,
    width: "95%",
    // alignItems: "center",
    alignSelf: "center",
    height: "26%",
    borderColor: "grey",
    borderRadius: 13,
    marginTop: 110,
    // backgroundColor: "grey",
    paddingTop: 5,
    top: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 20,
  },
  tataname: {
    fontFamily: "Roboto Slab",
    // fontWeight: "bold",
    paddingTop: 8,
  },
  payload: {
    fontFamily: "Roboto Slab",
    // fontWeight: "bold",
    paddingRight: 10,
    borderColor: "grey",
  },
  countdetails: {
    // fontFamily: "Roboto Slab",
    // // fontWeight: "bold",
    // margin: "auto",
    alignSelf: "center",
    // // textAlign: "center",
    // justifyContent: "center",
    marginHorizontal: 50,
    marginLeft: "15%",
  },
  vno: {
    alignSelf: "center",
    fontFamily: "Roboto Slab",
    fontSize: 15,
    // paddingTop: -10,
    // paddingBottom: 10,
    marginTop: -10,
    // marginLeft: 10,
  },
  vtxt: {
    fontFamily: "Roboto Slab",
  },
  btn: {
    fontFamily: "Roboto Slab",
    width: "90%",
    alignSelf: "center",
    marginTop: 270,
    position: "absolute",
    paddingTop: 5,
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
    paddingTop: 45,
    borderBottomWidth: 0.5,
    borderColor: "#D8D8D8",
  },
  tit: {
    // flexDirection: "row",
    textAlign: "center",
    marginTop: 10,
    fontSize: 17,
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
    fontSize: 17,
    paddingHorizontal: 2,
    color: "white",
    // fontWeight: "bold",
    fontFamily: "Roboto Slab",
  },
  tit2: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "white",
    color: "white",
    paddingHorizontal: 20,
    fontFamily: "Roboto Slab",
  },
  bidamt: {
    marginTop: -130,
    borderWidth: 1,
    // alignSelf: "center",
    // alignItems: "center",
    textAlign: "center",
    height: 50,
    width: "90%",
    // alignItems: "center",
    // alignSelf: "center",
    // alignContent: "center",
    // justifyContent: "center",
    marginLeft: 17,
    borderRadius: 15,
    backgroundColor: "#f6efef",
    textAlignVertical: "center",
    borderColor: "transparent",
    fontFamily: "Roboto Slab",
  },
  bidamtc: {
    width: "90%",
    // alignSelf: "center",
    alignItems: "center",
    marginLeft: 10,
    // justifyContent: "center",
  },
  timer: {
    position: "absolute",
    top: 0,
    marginTop: 320,
    // backgroundColor: "grey",
    // marginLeft: 200,
    backgroundColor: "#FAFAFA",
    alignSelf: "center",
    width: "90%",
    opacity: 0.75,
    // textAlign: "center",
    // alignContent: "center",
  },
  t1: {
    fontSize: 45,
    fontFamily: "Roboto Slab",
    color: "grey",
    textAlign: "center",
  },
  t2: {
    fontSize: 15,
    fontFamily: "Roboto Slab",
    color: "black",
    textAlign: "center",
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
    backgroundColor: "#2196F3",
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
  btntxt: {
    backgroundColor: "#6b61e2",
    height: 45,
    color: "white",
    alignSelf: "center",
    width: "100%",
    textAlignVertical: "center",
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    fontFamily: "Roboto Slab",
    fontSize: RFValue(19),
    borderRadius: 10,
  },
});
