import React, { Component } from 'react';
import { View,TouchableOpacity, Text, StyleSheet, ScrollView, AsyncStorage} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class FlexDimensionsBasics extends Component {
  constructor(props){
    super(props);
    this.state={
      value:[],
      pss:'',
     data:[],
    }
  }
    _onPressButton=()=> {  
        this.props.navigation.navigate('Twot')
     }
     _onPressBtn=() => {
       this.props.navigation.navigate('three')
     }
    //  _onPressButton2=() => {
    //    this.props.navigation.navigate('try')
    //  }
    //  _onPressButton3=() =>{
    //    this.props.navigation.navigate('apiim')
    //  }
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
     _dim =() =>{
       this.props.navigation.navigate('Di')
     }
     _cre = () =>{
       this.props.navigation.navigate('cr')
     }
     componentDidMount(){
      this.retrieveData();
      
      }
    retrieveData = async () => {
      try {
          
      const dat=await AsyncStorage.getItem('username');
      const pas=await AsyncStorage.getItem('password');
      const s=JSON.parse(dat);
      this.setState({value:s});
      // console.log(value);
      // console.log(dat);
      // this.setState({passw:pas});
      // console.log('hii',value);
          }
      catch(error){
      console.log(error);

      };
  }

   render() {
    return (
      <View style={styles.container}>
      {/* <Text style={{backgroundColor:'lightblue'}}>Welcome {this.state.value}</Text> */}
      <FlatList
          data={this.state.value}
          renderItem={({item}) => 
          <View style={{width:400, height:50,backgroundColor:'lightblue'}}>
          <Text style={{color:'red'}}>{item}</Text> 
          </View> 
                   
          }
        />
       <ScrollView contentContainerStyle={styles.containe}>
        <TouchableOpacity style={styles.buttonContainer1} onPress={()=>this._onPressBtn()}>
        <Text style={styles.buttonText}>Flat List - API</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2} onPress={()=>this._onPressButton()}>
        <Text style={styles.buttonText}>Flat list - Direct</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.buttonContainer1} onPress={()=>this._onPressButton2()}>
        <Text style={styles.buttonText}>fLATlIst TrY</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2} onPress={() =>this._onPressButton3()}>
        <Text style={styles.buttonText}>FlatList Test</Text>
        </TouchableOpacity> */}
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
        <TouchableOpacity style={styles.buttonContainer1} onPress={ () =>this._dim()}>
        <Text style={styles.buttonText}>Store Image</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer2} onPress={() =>this._cre()}>
        <Text style={styles.buttonText}>Conditional Render</Text>
        </TouchableOpacity>


        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
    backgroundColor:'#ffe6f2',
    justifyContent:'center',
    alignItems:'center'
    },
    containe: {
      paddingVertical: 20,
    backgroundColor:'#ffe6f2',
    justifyContent:'center',
    alignItems:'center'
    },
buttonContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width:300,
    height:50,
    
    backgroundColor:'#b30086',
    marginTop:10,
    marginBottom:10
    
  },
  buttonContainer2:{
    height:50,
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