import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'MALE', value: 0 },
    {label: 'FEMALE', value: 1 }
  ];

export default class formmm extends Component{
constructor(props){
    super(props);
    this.state={
        Name:"",
        Address:"",
        Phone:""

    }
}
render(){
    return(
        <View style={styles.container}>
         <TextInput
            style={styles.input}
            placeholder="name"
            onChangeText={(Name) => this.setState({name:Name})} 
            value={this.state.name} 
         />
         <TextInput style={styles.input}
         placeholder="address"
         onChangeText={(Address) => this.setState({addr:Address})}
         value={this.state.addr}/>
         <TextInput style={styles.input}
         placeholder="phone number"
         onChangeText={(Phone) => this.setState({Number:Phone})}
         value={this.state.Number}/>
         <TextInput style={styles.input}
        placeholder="Qualification"/>
          <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
          formHorizontal={true}
          marginLeft='5'
          labelHorizontal={true}
          buttonColor={'#b30086'}
          animation={true}
        />
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
      
    
    }
});