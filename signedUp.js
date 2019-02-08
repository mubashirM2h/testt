import React, {Component} from 'react';
import {Text,View, StyleSheet,AsyncStorage,TextInput} from 'react-native';

export default class sup extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            passw:'',
            
        }
    }
    componentDidMount(){
        this.retrieveData();
    }
    retrieveData = async () => {
        try {
            
    const val=await AsyncStorage.getItem('username');
    const pas=await AsyncStorage.getItem('password');
    this.setState({value:val});
    this.setState({passw:pas});
        }
        catch(error){

        };
    }
    
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.text}>WeLcoMe {this.state.value}</Text>

            <TextInput
            style={styles.input}
            placeholder={this.state.value}
            onChangeText={(Name) => this.setState({userName:Name})} 
            value={this.state.userName} />
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
    text: {
      borderRadius:25,
      
      color: "#b30086",
      
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize:16,
      
    
    },
    input:{
    backgroundColor:'white',
    color:'#b30086',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: 300
    }
});