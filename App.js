import React, { Component } from 'react';
import { Alert, StyleSheet, View, Text, TextInput,TouchableOpacity,AsyncStorage } from 'react-native';


export default class ButtonBasics extends Component {
  constructor(props){
    super(props);
    
    this.state = {userName : "Name", 
    password: "Name",
    pickedImage:'https://facebook.github.io/react-native/docs/assets/favicon.png'
  };
  
  }
  static   navigationOptions={
    header: null
  };
  _onPressButton= async ()=> {  
    if(this.state.userName==="Name"&&this.state.password==="Name"){
       this.props.navigation.navigate('onen')
    }else if(this.state.userName==="" && this.state.password===""){
      Alert.alert("Please Enter the username and password");
    }else{
      Alert.alert("Please enter correct user name and pasword");
    }
    try{
      await AsyncStorage.setItem('username', this.state.userName);
      await AsyncStorage.setItem('password',this.state.password);

    }catch(error){
      
    }
  };
  
  render() {
    return (
      
      <View style={styles.container}>
      
      <TextInput
      style={styles.input}
      placeholder="User Name"
      onChangeText={(Name) => this.setState({userName:Name})} 
      value={this.state.userName} 
      />
      <TextInput
      style={styles.input}
      placeholder="Password"
    
      secureTextEntry
      ref="password" 
      onChangeText={(pass) => this.setState({password:pass})} 
      value={this.state.password}/>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>this._onPressButton()}>
      <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
   justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#e6e6e6'

  },
  input: {
    width:300,
    borderRadius:25,
    backgroundColor:"#b30086",
    color: 'white',
    paddingHorizontal: 16,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:16,
    
  
  },
  buttonContainer: {
    backgroundColor:'white',
    color:'#b30086',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: 300
  },


});

