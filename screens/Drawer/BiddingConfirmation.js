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
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const BiddingConformation = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { width, height } = Dimensions.get("window");
  const [pin, setPin] = useState({
    latitude: 11.044341941487508,
    longitude: 77.0383614542556,
  });
  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts//RobotoSlab-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const clickHandler = () => {
    navigation.navigate("Your Trips");
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
            placeholder="Enter Your Bidding Price: Rs."
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.btntxt}>Confirm Your Bid</Text>
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
                Your Bidding Submitted Successfully!
              </Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={clickHandler}
              >
                <Text style={styles.textStyle}>Assign Driver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

// }}
export default BiddingConformation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    // flexWrap: "nowrap",
    // marginTop: 10,
    width: widthPercentageToDP("100%"),
    height: heightPercentageToDP("100%"),
  },
  container5: {
    position: "absolute",
    top: 0,
    height: heightPercentageToDP("100%"),
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
    marginLeft: widthPercentageToDP("10%"),

    // backgroundColor: "grey",
    // position: "absolute",
    top: 0,
  },
  overlay: {
    position: "absolute",
    marginTop: heightPercentageToDP("-85%"),
    // backgroundColor: "green",
    // flexDirection: "column-reverse",
  },
  container1: {
    backgroundColor: "#FAFAFA",
    opacity: 0.85,
    position: "absolute",
    marginTop: heightPercentageToDP("54%"),
    alignItems: "flex-start",
    width: widthPercentageToDP("90%"),
    height: heightPercentageToDP("43%"),
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
    // flexWrap: "nowrap",
    // marginBottom: 10,
    // bottom: 0,
    // paddingBottom: -10,
  },
  addrwrapper: {
    marginTop: heightPercentageToDP("2%"),

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  addrwrapper1: {
    flex: 1,
    flexDirection: "row",
    marginTop: heightPercentageToDP("-31%"),
    justifyContent: "space-around",
  },
  text: {
    fontSize: RFValue(14),
    fontFamily: "Roboto Slab",
    marginLeft: widthPercentageToDP("2.5%"),
    marginTop: heightPercentageToDP("0.5%"),
  },
  icon: {
    marginLeft: widthPercentageToDP("1.5%"),
    marginTop: heightPercentageToDP("0.5%"),
  },

  icon1: {
    position: "absolute",
    marginLeft: widthPercentageToDP("1.5%"),

    marginTop: heightPercentageToDP("12%"),
  },
  text1: {
    fontSize: RFValue(15),
    position: "absolute",

    fontFamily: "Roboto Slab",
    marginLeft: 45,
    marginTop: heightPercentageToDP("12%"),
    // backgroundColor: "grey",
  },
  img: {
    resizeMode: "contain",
    width: widthPercentageToDP("10%"),

    height: heightPercentageToDP("10%"),
  },
  img1: {
    // paddingTop: 10,
    // marginTop: heightPercentageToDP("-1.2%"),
    marginLeft: widthPercentageToDP("1%"),
  },
  imgcontainer: {
    flexDirection: "row",
    borderRightWidth: 1,
    borderColor: "grey",
    // paddingTop: 2,
    paddingRight: 10,
    // borderTopRightRadius: 0,
    marginLeft: widthPercentageToDP("-1.5%"),
    marginTop: heightPercentageToDP("-1.3%"),
  },
  vehicledetails: {
    borderWidth: 1,
    width: widthPercentageToDP("80%"),

    // alignItems: "center",
    alignSelf: "center",
    height: heightPercentageToDP("8%"),
    borderColor: "grey",
    borderRadius: 13,
    marginTop: heightPercentageToDP("16%"),
    // backgroundColor: "grey",
    // paddingTop: 5,
    top: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tataname: {
    // paddingTop: 20,
    fontFamily: "Roboto Slab",
    // fontWeight: "bold",
    paddingTop: 7,
    fontSize: RFValue(13),
  },
  payload: {
    fontFamily: "Roboto Slab",
    // fontWeight: "bold",
    paddingRight: 15,
    borderColor: "grey",
    fontSize: RFValue(13),
  },
  countdetails: {
    // fontFamily: "Roboto Slab",
    // // fontWeight: "bold",
    // margin: "auto",
    alignSelf: "center",
    // // textAlign: "center",
    // justifyContent: "center",
    // marginHorizontal: 10,
    marginLeft: widthPercentageToDP("3%"),
    // alignSelf: "center",
    // marginTop: 5,
  },
  vno: {
    alignSelf: "center",
    fontFamily: "Roboto Slab",
    fontSize: RFValue(13),
  },
  vtxt: {
    fontFamily: "Roboto Slab",
    fontSize: RFValue(13),
  },
  btn: {
    fontFamily: "Roboto Slab",
    width: widthPercentageToDP("55%"),
    alignSelf: "center",
    marginTop: heightPercentageToDP("35%"),
    position: "absolute",
    // paddingBottom: 10,
    height: heightPercentageToDP("18%"),
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
    alignItems: "center",
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
    fontSize: RFValue(15),

    paddingHorizontal: 2,
    color: "white",
    // fontWeight: "bold",
    fontFamily: "Roboto Slab",
  },

  bidamt: {
    marginTop: heightPercentageToDP("-16%"),
    borderWidth: 1,
    height: heightPercentageToDP("6%"),
    width: widthPercentageToDP("60%"),

    textAlign: "center",

    borderRadius: 15,
    backgroundColor: "#f6efef",
    borderColor: "transparent",
    fontFamily: "Roboto Slab",
    fontSize: RFValue(14),
    // paddingLeft: 10,
    color: "black",
  },
  bidamtc: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    // marginLeft: 15,
  },
  timer: {
    position: "absolute",
    top: 0,
    marginTop: heightPercentageToDP("42%"),
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
    fontSize: RFValue(35),

    fontFamily: "Roboto Slab",
    color: "black",
    textAlign: "center",
  },
  t2: {
    fontSize: RFValue(15),

    fontFamily: "Roboto Slab",
    color: "grey",
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
  btntxt: {
    backgroundColor: "#6b61e2",
    height: heightPercentageToDP("5%"),
    color: "white",
    alignSelf: "center",
    width: widthPercentageToDP("40%"),
    textAlignVertical: "center",
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    fontFamily: "Roboto Slab",
    fontSize: RFValue(16),
    borderRadius: 10,
  },
});
