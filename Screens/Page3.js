import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { styles } from "./styles"


const Page3 = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View
                style=
                {{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text style={styles.heading}>This is Third Page</Text>
                <Button
                    color='#FE9D88'
                    title='Go To First Page'
                    onPress={() => navigation.navigate('First Page')}
                />
                <Button
                    color='#FE9D88'
                    title='Go To Second Page'
                    onPress={() => navigation.navigate('Second Page')}
                />
            </View>
            <Text style={styles.textBottomStyle}>
                Thai-Nichi Institute of Technology
            </Text>
        </View>
    )
}

export default Page3
