import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useFonts } from "expo-font";
import { event } from "react-native-reanimated";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen-hooks";

const Welcome = ({ navigation }) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });

  const { width, height } = Dimensions.get("window");
  console.log("event", event.toString);
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    console.log("indexOfNextScreen", indexOfNextScreen);
    console.log("currentPage", currentPage);

    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  const [loaded] = useFonts({
    "Roboto Slab": require("../assets/fonts/RobotoSlab-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const clickHandler = () => {
    navigation.navigate("Login");
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1, backgroundColor: "#F7F9F9" }}
          horizontal={true}
          scrollEventThrottle={12}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height }}>
            <Image
              source={require("../assets/en1.jpg")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Move Your Loads With</Text>
              <Text style={styles.paragraph}>
                Vehicles range from 3 wheelers to Tempo {"\n"} 12 wheeler
                Trailors
              </Text>
            </View>
          </View>

          <View style={{ width, height }}>
            <Image
              source={require("../assets/en2.jpg")}
              style={styles.imageStyle}
            />

            <View style={styles.wrapper}>
              <Text style={styles.header}>Consignment Tracking System</Text>
              <Text style={styles.paragraph}>
                Track each and every movement {"\n"} of your Goods
              </Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require("../assets/en3.png")}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Safe & Reliable Trucking</Text>
              <Text style={styles.paragraph}>
                Coorman certified driver Partner
              </Text>
              <TouchableOpacity style={styles.btnwrapper}>
                <Text style={styles.btn} onPress={clickHandler}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(3).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: pageIndex === index ? 1 : 0.2 },
              ]}
              key={index}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: "stretch",
    // marginTop: "2%",
    height: heightPercentageToDP("65%"),
    width: widthPercentageToDP("90%"),
    alignSelf: "center",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
    marginTop: heightPercentageToDP("6%"),
  },
  header: {
    fontSize: RFValue(15),
    // fontWeight: 'bold',
    marginBottom: heightPercentageToDP("2%"),
    fontFamily: "Roboto Slab",
    textAlign: "center",
  },
  paragraph: {
    fontSize: RFValue(12),

    fontFamily: "Roboto Slab",
    textAlign: "center",
  },
  paginationWrapper: {
    position: "absolute",
    marginTop: heightPercentageToDP("87%"),

    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "orange",
    marginLeft: 10,
    // marginBottom: "-30%",
    marginTop: heightPercentageToDP("7%"),
  },
  btn: {
    fontSize: RFValue(17),

    borderWidth: 1,
    borderRadius: 25,
    height: 45,
    textAlign: "center",
    // padding: 10,
    backgroundColor: "orange",
    borderColor: "transparent",
    color: "#fff",
    fontFamily: "Roboto Slab",
    textAlignVertical: "center",
  },
  btnwrapper: {
    fontSize: 17,
    // borderWidth:1,
    marginTop: heightPercentageToDP("5%"),
    width: widthPercentageToDP("35%"),
  },
});
