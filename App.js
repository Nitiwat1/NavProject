import { StyleSheet, Text, View, Button, SafeAreaView , Image} from "react-native";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from "./Screens/HomeScreen";


const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255,45,85)'
    }
}

function FeedScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Feed Screen</Text>
            <Button title='Open drawer' onPress={() => navigation.openDrawer()} />
            <Button title='Toggle drawer' onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

function NotificationScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Notification Screen</Text>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Image
                    source={require("./assets/react_logo.png")}
                    style={styles.sideMenuProfileIcon}
                />

                <DrawerItemList {...props} />
                <DrawerItem
                    label="Close Drawer" onPress={() => props.navigation.closeDrawer()}
                />
                <DrawerItem
                    label="Toggle Drawer" onPress={() => props.navigation.toggleDrawer()}
                />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
}


function MyDrawer() {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                // drawerStyle:{
                //     backgroundColor:'pink',
                //     width:240
                // }
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notification" component={NotificationScreen} />
        </Drawer.Navigator>
    )
}
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer theme={MyTheme}>
            <MyDrawer />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: "center",
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: "center",
    },
});