import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./Screens/FirstPage";
import SecondPage from "./Screens/SecondPage";
import ThirdPage from "./Screens/ThirdPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          hearderStyle: { backgroundColor: "#43DAB1" },
          hearderTintColor: "#43DAB1",
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
        }}
      >
        <Stack.Screen name="First Page" component={FirstPage}/>
        <Stack.Screen name="Second Page" component={SecondPage}/>
        <Stack.Screen name="Third Page" component={ThirdPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5733",
    alignItems: "center",
    justifyContent: "center",
  },
});
