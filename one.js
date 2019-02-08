import React, { Component } from 'react';
import { View,TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class FlexDimensionsBasics extends Component {
    _onPressButton=()=> {  
        this.props.navigation.navigate('Twot')
     }
     _onPressBtn=() => {
       this.props.navigation.navigate('three')
     }
     _onPressButton2=() => {
       this.props.navigation.navigate('try')
     }
     _onPressButton3=() =>{
       this.props.navigation.navigate('apiim')
     }
     _storData=() =>{
       this.props.navigation.navigate('savedat') 
     }
     _timing= () =>{
       this.props.navigation.navigate('timerr')
     }
     _imagePick=()=>{
       this.props.navigation.navigate('Ipic')
     }
     _BottomNavi=() =>{
       this.props.navigation.navigate('botto')
     }
     _formme =() =>{
       this.props.navigation.navigate('formee')
     }

   
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer1} onPress={()=>this._onPressBtn()}>
        <Text style={styles.buttonText}>Flat List - API</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2} onPress={()=>this._onPressButton()}>
        <Text style={styles.buttonText}>Flat list - Direct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer1} onPress={()=>this._onPressButton2()}>
        <Text style={styles.buttonText}>fLATlIst TrY</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2} onPress={() =>this._onPressButton3()}>
        <Text style={styles.buttonText}>FlatList Test</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer1} onPress={() =>this._storData()}>
        <Text style={styles.buttonText}>GreEtInG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2} onPress={() =>this._timing()}>
        <Text style={styles.buttonText}>Timer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer1} onPress={() =>this._imagePick()}>
        <Text style={styles.buttonText}>Image Picker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2} onPress={()=>this._BottomNavi()}>
        <Text style={styles.buttonText}>Bottom Navigation</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer1} onPress={()=>this._formme()}>
        <Text style={styles.buttonText}>Form</Text> 
        </TouchableOpacity>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor:'#ffe6f2',
    justifyContent:'center',
    alignItems:'center'
    },
buttonContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width:300,
    flex:1,
    backgroundColor:'#b30086',
    marginTop:10,
    marginBottom:10
    
  },
  buttonContainer2:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width:300,
    backgroundColor:'#b30086',
    marginBottom:10,
    marginTop:10
  },
  buttonText: {
    color: 'white',
    fontWeight:'bold'
    
  }
});