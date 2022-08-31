import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { styles } from "./styles"

const Page1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View
                style=
                {{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text style={styles.heading}>This is the First Page</Text>
                <Button
                    color='#FE9D88'
                    title='GO TO SECOND PAGE'
                    onPress={() => navigation.navigate('Second Page',
                    )}
                />
                <Button
                    color='#FE9D88'
                    title='GO TO THIRD PAGE'
                    onPress={() => navigation.navigate('Third Page',
                    )}
                />
            </View>
            <Text style={styles.textBottomStyle}>
                Thai-Nichi Institute of Technology
            </Text>
        </View>

    )
}

export default Page1
