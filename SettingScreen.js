import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,AsyncStorage, Alert } from "react-native";

class SettingsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userName:'',
      phn:'',
      password:'',
      repassword:''

    }
   
  }
  _onPressButton =async() =>{
    if(this.state.password ===""){
      Alert.alert("WhAt  U Want?");
     }else{
    if(this.state.password===this.state.repassword){
      if(this.state.userName!='' && this.state.phn!=''){
        try{
          await AsyncStorage.setItem('username', this.state.userName);
          await AsyncStorage.setItem('password',this.state.password);
    
        }catch(error){
          
        }
        this.props.navigation.navigate('signedu')
      }else{
        Alert.alert("PleaSe Fill iN ThER BlaNkS !!!!");
      }
    }else{
      Alert.alert("PlEasE CheCK YouR PasSwOrds ##");
    }

  }
  };
  render(){
    return(
      <View style={styles.container}>
         <TextInput
        style={styles.input}
        placeholder="Type a User Name !"
        onChangeText={(Name) => this.setState({userName:Name})} 
        value={this.state.userName} />
        <TextInput
        style={styles.input}
        placeholder=" Call me ?"
        onChangeText={(Phone) => this.setState({phn:Phone})} 
        value={this.state.phn} />
        <TextInput
        style={styles.input}
        placeholder="Choose pasSword **"
        secureTextEntry
        ref="password" 
        onChangeText={(pass) => this.setState({password:pass})} 
        value={this.state.password}/> 
        <TextInput
        style={styles.input}
        placeholder="Re enTer ***"
        secureTextEntry
        ref="password" 
        onChangeText={(repass) => this.setState({repassword:repass})} 
        value={this.state.repassword}/>   
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this._onPressButton()}>
        <Text style={styles.buttonText}>SIgN Up</Text>
        </TouchableOpacity>  
      </View>

    );
  }
}
const styles=StyleSheet.create({
  container:{
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

export default SettingsScreen;