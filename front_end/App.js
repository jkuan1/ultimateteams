import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Icon, Image } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}} style={{ width: 200, height: 200 }}/>
        <Text style={styles.introduction}>Welcome to UltiApp</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11697A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introduction:{
    fontWeight:"bold",
    fontSize:30,
    color:"#ffa62b",
    marginBottom:40,
    textAlign: 'center'
  },
  inputView:{
    width:"80%",
    backgroundColor:"#3a8092",
    borderRadius:8,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11,
    marginTop: 10,
    marginBottom: 10
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#ffa62b",
    borderRadius:8,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});