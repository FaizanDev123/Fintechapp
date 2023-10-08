import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screen/authScreen/Login';
import CreditScreen from './src/screen/crediscorescreen/CreditScreen';
import Homescreen from './src/screen/Homescreen';
import OTPScreen from './src/screen/authScreen/OtpScreen';
import { Ionicons } from '@expo/vector-icons'; // Import the icons
import ContactScreen from './src/screen/SupportScreen';
import IncomeSelectionScreen from './src/screen/form/form1';
import BankSelectionScreen from './src/screen/form/form2';
import EmploymentDetailsScreen from './src/screen/form/form3';
import EmploymentType from './src/screen/form/form4';
import RegistrationScreen from './src/screen/authScreen/RegisterScreen';
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Homescreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Credit Score" 
        component={CreditScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="More" 
        component={IncomeSelectionScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-horizontal" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
            <Tab.Screen 
        name="Support Screen" 
        component={ContactScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-horizontal" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="otpscreen" component={OTPScreen} />
        <Stack.Screen name="BankSelection" component={BankSelectionScreen} />
        <Stack.Screen name="employeSelection" component={EmploymentDetailsScreen} />
        <Stack.Screen name="employeetype" component={EmploymentType} />
        <Stack.Screen name="signup" component={RegistrationScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
