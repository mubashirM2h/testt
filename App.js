import React, { Component } from 'react';
import { Alert,Animated, StyleSheet, View, Text, TextInput,TouchableOpacity,AsyncStorage } from 'react-native';

const data=[];


class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}


export default class ButtonBasics extends Component {
  constructor(props){
    super(props);
    
    this.state = {userName : '', 
    password: '',
    pickedImage:'https://facebook.github.io/react-native/docs/assets/favicon.png'
  };
  
  }
  static   navigationOptions={
    header: null
  };
  _onPressButton= async ()=> {  
    // if(this.state.userName==="Name"&&this.state.password==="Name"){
       
    // }else if(this.state.userName==="" && this.state.password===""){
    //   Alert.alert("Please Enter the username and password");
    // }else{
    //   Alert.alert("Please enter correct user name and pasword");
    // }
    try{
      data.push(this.state.userName.toString());
      await AsyncStorage.setItem('username', JSON.stringify(data));
      await AsyncStorage.setItem('password',this.state.password);
      this.props.navigation.navigate('onen')
    }catch(error){
      
    }
  };
  
  render() {
    return (
      
      <View style={styles.container}>
       <FadeInView style={styles.container}>
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
      </FadeInView>
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

