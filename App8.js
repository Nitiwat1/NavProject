import { StyleSheet, TextInput, Button, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [FullName, setFullName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");

  const checkTextInput = () => {
    if (!FullName.trim()) {
      alert("Please fill Name");
      return;
    }

    if (FullName.trim() && Phone.trim() && Address.trim()) {
      alert("You are Registered Successfully");
      return;
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Enter name"
        style={styles.textInputStyle}
        value={FullName}
        onChangeText={(FullName) => {
          setFullName(FullName);
        }}
      />

      <TextInput
        placeholder="Enter Contact No."
        style={styles.textInputStyle}
        value={Phone}
        onChangeText={(Phone) => {
          setPhone(Phone);
        }}
      />

      <TextInput
        placeholder="Enter Address"
        style={styles.textInputStyleEx}
        value={Address}
        onChangeText={(Address) => {
          setAddress(Address);
        }}
      />

      <View style={{ marginTop: 15 }}>
        <Button
          title="submit"
          onPress={() => checkTextInput()}
        />
      </View>
    </View>

  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
  textInputStyleEx: {
    width: "100%",
    height: 100,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
