import { StyleSheet, Text, View, Button } from 'react-native'
import React from "react"

const SecondPage = ({ navigation, route }) => {

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>This is the Second Page</Text>
      <Button
        title='GO TO FIRST PAGE'
        onPress={() => navigation.navigate('First Page',
          { postText }
        )}
      />
      <Button
        title='GO TO THIRD PAGE'
        onPress={() => navigation.navigate('Third Page',
          { postText }
        )}
      />

    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",

    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});