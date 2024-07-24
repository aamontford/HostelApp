import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import BackButton from "./src/components/BackButton";

// Welcome Screens
import StudentWelcomeScreen from "./src/screens/Student WelcomeScreen";
import ManagerWelcomeScreen from "./src/screens/Manager WelcomeScreen";
import ManagerSignIn from "./src/screens/Manager SignIn";
import ManagerSignUp from "./src/screens/Manager SignUp";
import StudentSignIn from "./src/screens/Student SignIn";
import StudentSignUp from "./src/screens/Student SignUp";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import Home from "./src/screens/HomeScreen";
import HomeScreen from "./src/screens/HomeScreen1";

// App Screens
import BookingScreen from "./src/screens/BookingScreen";
import Payment from "./src/screens/PaymentScreen";
import Summary from "./src/screens/SummaryScreen";
import ProfileScreen from "./src/screens/Pro";
import HostelBookingInfo from "./src/screens/Booking Info";
import Manage from "./src/screens/ManageScreen";
import HostelInfo from "./src/screens/HostelInfoScreen";
import AddRoom from "./src/screens/AddRoomScreen";
import Congratualtion from "./src/screens/CongratulationScreen";
import Splash from "./src/screens/splash";
import Hostel from "./src/screens/Hostel";
import ManagerUpload from "./src/screens/Manager Upload";
import ViewScreen from "./src/screens/View";
import UploadHostelScreen from "./src/screens/UploadHostelForm";
import Hdetails from "./src/screens/Hdetails";
import UploadHdetails from "./src/screens/UploadHdetails";
import BackCongratualtion from "./src/screens/BackToHome";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
 
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Hostel"
      component={Hostel} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen 
      name="Book" 
      component={BookingScreen} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="book" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen 
      name="ProfileScreen" 
      component={ProfileScreen} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
            name="Splash"
            component={Splash} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen} 
            options={{ headerShown: false }}
          />
        <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="TabNavigator" 
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ManagerSignUp"
            component={ManagerSignUp}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ManagerSignIn"
            component={ManagerSignIn}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="StudentSignUp"
            component={StudentSignUp}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="StudentSignIn"
            component={StudentSignIn}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ManagerWelcomeScreen"
            component={ManagerWelcomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="StudentWelcomeScreen"
            component={StudentWelcomeScreen}
          />
          <Stack.Screen 
            name="Summary"
            component={Summary} 
            options={{ headerShown: true }}
          />
          <Stack.Screen 
            name="Payment"
            component={Payment} 
            options={{ headerShown: true }}
          />
          <Stack.Screen 
            name="HostelBookingInfo"
            component={HostelBookingInfo} 
            options={{ headerShown: true }}
          />
          <Stack.Screen 
            name="ManagerUpload"
            component={ManagerUpload} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="UploadHostelScreen"
            component={UploadHostelScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen
          name="Manage"
          component={Manage}
          options={{ 
            headerShown: false,
            headerTitle: 'My Hostels',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
          }}
        />
          <Stack.Screen
          name="View" 
        component={ViewScreen} 
        options={({ navigation }) => ({
          headerTitle: 'Makassela Hostel', // Or fetch the hostel name dynamically
          headerLeft: () => <BackButton goBack={navigation.goBack} />,
        })}
        />
        <Stack.Screen
            options={{ headerShown: false }}
            name="AddRoom"
            component={AddRoom}
          />
        <Stack.Screen
            options={{ headerShown: false }}
            name="Congratualtion"
            component={Congratualtion}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Hdetails"
            component={Hdetails}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="UploadHdetails"
            component={UploadHdetails}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="BackCongratualtion"
            component={BackCongratualtion}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="HostelInfo"
            component={HostelInfo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;