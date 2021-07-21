import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
// import MyIcon from "../../components/MyIcon";
import MapView, { Callout, Circle, Marker, Overlay } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
// import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const TripTracking = ({ navigation }) => {
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
  // const clickHandler = () => {
  //   navigation.toggleDrawer;
  // };
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
      ></MapView>

      <View style={styles.container1}>
        <Image source={require("../../assets/userdf.png")} style={styles.dp1} />
        <Text style={styles.custname}> Robert De Niro</Text>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            // paddingVertical: -5,
            paddingBottom: 5,
          }}
        >
          <MaterialIcons name="star" size={24} color="black" />
          <MaterialIcons name="star" size={24} color="black" />
          <MaterialIcons name="star" size={24} color="black" />
          <MaterialIcons name="star-border" size={24} color="black" />
          <MaterialIcons name="star-border" size={24} color="black" />
        </View>
        <View style={styles.statuscontainer}>
          <View style={styles.statuscontainer1}>
            <Text style={styles.txt2}>Status</Text>
            <Text style={styles.txt1}> In-Route</Text>
          </View>
          <View style={styles.statuscontainer2}>
            <Text style={styles.txt2}> Offer Amount</Text>
            <Text style={styles.txt1}> $ 270</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Ionicons
            name="ios-location-sharp"
            size={21}
            color="#FF4000"
            style={styles.icon}
          />
          <Text style={styles.text}> Chitra,Coimbatore,India</Text>
        </View>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Ionicons
            name="ios-location-sharp"
            size={21}
            color="#0040FF"
            style={styles.icon}
          />
          <Text style={styles.text}> Ukkadam,Coimbatore,India</Text>
        </View>
        <View style={[styles.statuscontainer, styles.add]}>
          <View style={[styles.statuscontainer1, styles.add1]}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.txt2, styles.add3]}>Bid Amount: </Text>
              <Text style={[styles.txt1, styles.add4]}> $ 250</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.txt2, styles.add3]}>Equipments: </Text>
              <Text style={[styles.txt1, styles.add4]}>Pickup Truck</Text>
            </View>
          </View>

          <View style={styles.statuscontainer2}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.txt2, styles.add3]}>Offer Amount:</Text>
              <Text style={[styles.txt1, styles.add4]}> $ 270</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.txt2, styles.add3]}>Distance:</Text>
              <Text style={[styles.txt1, styles.add4]}> 172 MI</Text>
            </View>
          </View>
        </View>
        <View style={styles.pick}>
          <Text>Pickup location</Text>
          <TouchableOpacity>
            <FontAwesome
              name="send"
              size={24}
              color="black"
              style={styles.pickicon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <Text style={styles.btntxt} onPress={console.log("")}>
            On the way to Pick Up
          </Text>
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
          <Text style={styles.tit1}>Trip #1234 - Customer Name</Text>
        </View>
      </View>
      <View style={{ width, height }}>
        <TouchableOpacity style={styles.overlay}>
          <Ionicons
            style={styles.menu}
            name="ios-menu"
            size={35}
            color="black"
            onPress={() => navigation.openDrawer()}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TripTracking;

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

  container1: {
    backgroundColor: "#FAFAFA",
    opacity: 0.85,
    position: "absolute",
    // marginTop: 700,
    alignItems: "flex-start",
    height: "65%",
    width: "90%",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
    // flexWrap: "nowrap",
    // marginBottom: 10,
    bottom: 0,
    // paddingBottom: -10,
  },

  btn: {
    fontFamily: "Roboto Slab",
    width: "90%",
    alignSelf: "center",
    marginTop: 430,
    position: "absolute",
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
    paddingTop: 35,
    borderBottomWidth: 0.5,
    borderColor: "#D8D8D8",
  },
  tit: {
    // flexDirection: "row",
    textAlign: "center",
    marginTop: 10,
    fontSize: RFValue(18),
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

    fontSize: RFValue(16),
  },

  menu: {
    marginTop: 100,
    marginLeft: "20%",
    // backgroundColor: "grey",
    // position: "absolute",
    // top: 0,
  },
  overlay: {
    position: "absolute",
    marginTop: -700,
    // backgroundColor: "green",
    // flexDirection: "column-reverse",
  },
  dp1: {
    resizeMode: "contain",
    height: 50,
    width: 50,
    alignSelf: "center",
    // paddingTop: 20,
    marginTop: 20,
  },
  custname: {
    fontFamily: "Roboto Slab",
    fontSize: RFValue(15),
    alignSelf: "center",
    padding: 10,
  },
  statuscontainer: {
    borderWidth: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    borderColor: "lightgrey",
    height: 60,
  },
  statuscontainer1: {
    borderRightWidth: 1,
    borderColor: "lightgrey",
    paddingRight: 70,
  },
  txt1: {
    fontWeight: "bold",
    fontSize: RFValue(16),
    alignSelf: "center",
    color: "black",
  },
  txt2: {
    fontFamily: "Roboto Slab",
    // fontWeight: "bold",
    fontSize: RFValue(14),

    alignSelf: "center",
    color: "grey",
  },
  add: {
    height: 70,
    marginTop: 5,
    paddingTop: 10,
  },
  add1: {
    // height: 100,
    paddingRight: 20,
    // flexDirection: "row",
  },
  add3: {
    fontSize: RFValue(13),
  },
  add4: {
    fontSize: RFValue(13),
  },
  pick: {
    fontSize: RFValue(14),

    fontFamily: "Roboto Slab",
    flexDirection: "row",
    // justifyContent: "space-between",
    margin: 15,
  },
  pickicon: {
    marginHorizontal: 150,
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto Slab",
  },
  btntxt: {
    backgroundColor: "#6b61e2",
    height: 40,
    color: "white",
    alignSelf: "center",
    width: "90%",
    textAlignVertical: "center",
    // alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    fontFamily: "Roboto Slab",
    fontSize: RFValue(19),
    borderRadius: 10,
  },
});
