import { StyleSheet, Text, View} from 'react-native'

const AboutScreen = ({route}) => {

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>About Screen</Text>
      <Text>Email : {route.params.email}</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({})