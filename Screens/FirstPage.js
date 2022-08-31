import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import React from "react"

const FirstPage = ({navigation,route}) => {

    
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>This is the First Page</Text>
        
        {/* <TextInput
        placeholder='Name Here'
        style={{
            width:300,
            padding:10,
            backgroundColor:"#FF5733",
            marginTop:15,
            marginBottom:10
        }}
        onChangeText={setPostText}
        value={postText}
        /> */}
        <Button 
      title='GO TO SECOND PAGE'
      onPress={()=>navigation.navigate('Second Page',
      {postText}
      )}
      />
        <Button 
      title='GO TO THIRD PAGE'
      onPress={()=>navigation.navigate('Third Page',
      {postText}
      )}
      />
        
  </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
})