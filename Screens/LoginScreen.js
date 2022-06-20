import { CurrentRenderContext } from '@react-navigation/native'
import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
{
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">

      <View style={styles.inputContainer}>
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />
         <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        /> 
      
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => { }}
        style={styles.button}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => { }}
        style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>
)}
}


export default LoginScreen

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

inputContainer: {
  width: '80%'
},
input: {
  backgroundColor: 'white', 
  paddingHorizontal: 15,
  paddingVertical: 10,
  borderRadius: 5,
  marginTop: 5,
},
buttonContainer: {
  width:'60%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 40,
},
button: {
  backgroundColor: '#2da44e',
  width: '100%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center'
},
buttonOutline: {
  backgroundColor: 'white',
  marginTop: 5,
  borderColor: '100%',
  borderWidth: 2,
},
buttonText: {
  color: 'white',
  fontWeight: '700',
  fontSize: 16,
},
buttonOutlineText: {
  color: 'black',
  fontWeight: '700',
  fontSize: 16,
},
})