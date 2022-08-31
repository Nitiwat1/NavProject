import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './Screens/Page1';
import Page2 from './Screens/Page2';
import Page3 from './Screens/Page3';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='StackFP'
                screenOptions={{
                    headerStyle: { backgroundColor: '#FE603E' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 25 }
                }}
            >
                <Stack.Screen name='First Page' component={Page1} />
                <Stack.Screen name='Second Page' component={Page2} />
                <Stack.Screen name='Third Page' component={Page3} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

