import { StyleSheet, Text, View, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Ionicons
      name='home'
      size={30}
      color='#00812'
      />
      <Text>Home Screen</Text>
      <Button 
      title='เกี่ยวกับเรา'
      onPress={()=>navigation.navigate('About',
      {email:'po.nitiwat_st@tni.ac.th'}
      )}
      />
    </View>
  )
}

export default HomeScreen