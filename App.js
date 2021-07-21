import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
// import { StyleSheet, Text, View } from "react-native";
import Welcome from "./components/Welcome";
// import Start from './screens/Start/Start';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Start from "./screens/Start/Start";
import Login from "./screens/Start/Login";
import Reset from "./screens/Start/Reset";
import { AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import Dashboard from "./screens/Home/DashboardScreen";
import Profile from "./screens/Drawer/Profile";
import YourTrips from "./screens/Drawer/YourTrips";
import YourDrivers from "./screens/Drawer/YourDrivers";
import BiddingRequest from "./screens/Drawer/BiddingRequest";
import YourVehicles from "./screens/Drawer/YourVehicles";
import Billings from "./screens/Drawer/Billings";
import Settings from "./screens/Drawer/Settings";
import DashboardScreen from "./screens/Home/DashboardScreen";
import { HeaderBackButton } from "@react-navigation/stack";
import { Button, Image } from "react-native";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";
import MyBid from "./components/MyBid";
import BiddingPage from "./screens/Drawer/BiddingPage";
// import DriverAssigning from "./screens/Drawer/DriverAssigning";
import AddDriver from "./screens/Drawer/Add Driver";
import AddVehicle from "./screens/Drawer/Add Vehicle";
import BiddingConfirmation from "./screens/Drawer/BiddingConfirmation";
import Ongoing from "./screens/Drawer/Ongoing";
import TripTracking from "./screens/Drawer/TripTracking";
import Loading from "./screens/Drawer/Loading";
import AddProduct from "./screens/Drawer/Add Product";
import BidAccepted from "./screens/Drawer/BidAccepted";
import BidRejected from "./screens/Drawer/BidRejected";
import Upcoming from "./screens/Drawer/Upcoming";
import Completed from "./screens/Drawer/Completed";
import Cancelled from "./screens/Drawer/Cancelled";
// import { Loader } from "@googlemaps/js-api-loader"
export default function App() {
  const Stack = createStackNavigator();

  const Drawer = createDrawerNavigator();

  function MyDrawer({ navigation }) {
    return (
      <Drawer.Navigator
        // drawerContent={<Image source={require("./assets/en4.jpg")} />}
        drawerStyle={{ paddingTop: 90 }}
        // drawerContent={<Image source={require("./assets/dp.png")} />}
      >
        <Drawer.Screen
          name="Home"
          component={DashboardScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? "#5155FF" : "#ccc"}
              />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-logo-github"
                size={size}
                color={focused ? "#5155FF" : "#ccc"}
              />
            ),
          }}
        /> */}
        <Drawer.Screen
          name="Bidding Request"
          component={BiddingRequest}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="ios-notifications"
                size={size}
                color={focused ? "#5155FF" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Your Trips"
          component={YourTrips}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="car"
                size={size}
                color={focused ? "#5155FF" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Your Drivers"
          component={YourDrivers}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="man"
                size={size}
                color={focused ? "#5155FF" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Your vehicles"
          component={YourVehicles}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="logo-vimeo"
                size={size}
                color={focused ? "#5155FF" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Billings"
          component={Billings}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-logo-usd"
                size={size}
                color={focused ? "#5155FF" : "#ccc"}
              />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-settings-sharp"
                size={size}
                color={focused ? "#5155FF" : "#ccc"}
              />
            ),
          }}
        /> */}
        <Drawer.Screen
          name="Loading"
          component={Loading}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome5
                name="truck-loading"
                size={size}
                color={focused ? "#5155FF" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Log Out"
          component={Login}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="ios-log-out"
                size={size}
                color={focused ? "#5155FF" : "#ccc"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            // height: 30,
            backgroundColor: "transparent",
            borderColor: "transparent",
            // color: "dodgerblue",
            // marginLeft: 40,
          },
          headerTitle: "",
          headerTransparent: "true",
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        {/* <Stack.Screen name="Start" component={Start} /> */}

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />

        <Stack.Screen
          name="Reset"
          component={Reset}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={MyDrawer}
          headerMode="false"
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Bidding Confirmation"
          component={BiddingConfirmation}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        {/* <Stack.Screen
          name="Driver Assigning"
          component={DriverAssigning}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        /> */}
        <Stack.Screen
          name="Add Driver"
          component={AddDriver}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Add Vehicle"
          component={AddVehicle}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />

        <Stack.Screen
          name="Trip Ongoing"
          component={Ongoing}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Trip Tracking"
          component={TripTracking}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Add Product"
          component={AddProduct}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Bid Accepted"
          component={BidAccepted}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Bid Rejected"
          component={BidRejected}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Upcoming"
          component={Upcoming}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Completed"
          component={Completed}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Cancelled"
          component={Cancelled}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Your Drivers"
          component={YourDrivers}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Vehicleslist"
          component={YourVehicles}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
        <Stack.Screen
          name="Your Trips"
          component={YourTrips}
          options={{
            headerLeft: () => null,
            title: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return <DriverAssigning />;
}
