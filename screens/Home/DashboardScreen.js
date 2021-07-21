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
} from "react-native";
// import MyIcon from "../../components/MyIcon";
import MapView, { Callout, Circle, Marker, Overlay } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
// import { DrawerItems, SafeAreaView } from "react-navigation";
// import { Loader } from "@googlemaps/js-api-loader";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const DashboardScreen = ({ navigation }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const { width, height } = Dimensions.get("window");
  const [pin, setPin] = useState({
    latitude: 11.044341941487508,
    longitude: 77.0383614542556,
  });
  const [loaded] = useFonts({
    "Roboto Slab": require("../../assets/fonts/RobotoSlab-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const DefaultDrawer = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
  const clickHandler = () => {
    navigation.navigate("Bidding Request");
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
        <Marker
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
            <Text style={styles.callout}>you are here</Text>
          </Callout>
        </Marker>
        {/* <Circle center={pin} radius={1000} fillColor="transparent" /> */}
      </MapView>
      <View style={{ width, height }}>
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
      </View>
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
        <View style={styles.btn}>
          <Text style={styles.btntxt} onPress={clickHandler}>
            Confirm Booking
          </Text>
        </View>
      </View>
      <View style={styles.timer}>
        <Text style={styles.t1}>5 : 21</Text>
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
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

// }}
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    // flexWrap: "nowrap",
    height: heightPercentageToDP("100%"),
    // height: "100%",
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
    // marginTop: -20,
    backgroundColor: "#FAFAFA",
    opacity: 0.85,

    position: "absolute",
    // marginTop: 700,
    alignItems: "flex-start",
    height: heightPercentageToDP("35%"),
    width: widthPercentageToDP("90%"),

    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
    // flexWrap: "nowrap",
    // marginBottom: 10,
    // bottom: 0,
    // paddingBottom: -10,
    marginTop: heightPercentageToDP("63%"),
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
    marginTop: heightPercentageToDP("-23%"),
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

    marginTop: heightPercentageToDP("12.6%"),
  },
  text1: {
    fontSize: RFValue(15),
    position: "absolute",

    fontFamily: "Roboto Slab",
    marginLeft: 45,
    marginTop: heightPercentageToDP("12.6%"),
    // backgroundColor: "grey",
  },
  img: {
    resizeMode: "contain",
    width: widthPercentageToDP("10%"),

    height: heightPercentageToDP("10%"),
    marginTop: heightPercentageToDP("-1%"),
    marginLeft: widthPercentageToDP("1.5%"),
  },
  imgcontainer: {
    flexDirection: "row",
    borderRightWidth: 1,
    borderColor: "grey",
    paddingTop: 2,
    // paddingRight: 10,
    borderTopRightRadius: 0,
    marginLeft: widthPercentageToDP("1%"),
  },
  vehicledetails: {
    borderWidth: 1,
    width: widthPercentageToDP("80%"),

    // alignItems: "center",
    alignSelf: "center",
    height: heightPercentageToDP("8.5%"),
    borderColor: "grey",
    borderRadius: 13,
    marginTop: heightPercentageToDP("17.5%"),
    // backgroundColor: "grey",
    // paddingTop: 5,
    top: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tataname: {
    fontFamily: "Roboto Slab",
    // fontWeight: "bold",
    paddingTop: 8,
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
    marginHorizontal: 50,
    marginLeft: widthPercentageToDP("9%"),
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
    marginTop: heightPercentageToDP("28%"),
    position: "absolute",
    // paddingBottom: 10,
    height: heightPercentageToDP("5%"),
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
  t1: {
    fontSize: RFValue(35),
    fontFamily: "Roboto Slab",
    color: "black",
    textAlign: "center",
  },
  t2: {
    fontSize: RFValue(19),
    fontFamily: "Roboto Slab",
    color: "grey",
    textAlign: "center",
  },
  timer: {
    position: "absolute",
    top: 0,
    marginTop: heightPercentageToDP("48%"),
    // backgroundColor: "grey",
    // marginLeft: 200,
    backgroundColor: "#FAFAFA",
    alignSelf: "center",
    width: widthPercentageToDP("90%"),
    height: heightPercentageToDP("11%"),

    opacity: 0.75,
    // textAlign: "center",
    // alignContent: "center",
    borderRadius: 15,
  },
  callout: {
    fontSize: RFValue(15),
    fontFamily: "Roboto Slab",
  },
});
