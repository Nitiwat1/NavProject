import { StyleSheet, Text, View, Button } from 'react-native'
import React from "react"

const ThirdPage = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>This is the Third Page</Text>
            <Button
                title='GO TO FIRST PAGE'
                onPress={() => navigation.navigate('First Page',
                    { postText }
                )}
            />
            <Button
                title='GO TO SECOND PAGE'
                onPress={() => navigation.navigate('Second Page',
                    { postText }
                )}
            />

        </View>
    );
};

export default ThirdPage
