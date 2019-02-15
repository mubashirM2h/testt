import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-simple-time-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';

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
        Phone:"",
        date:"2016-05-15",
        dat:"2015-05-23",
        tim:'12:00'

    }
}

state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    buton=this.state.date;
    this._hideDateTimePicker();
  };

render(){
    const { selectedHours, selectedMinutes } = this.state;
    
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
           style={styles.input}
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
          formHorizontal={true}
          marginLeft='5'
          labelHorizontal={true}
          buttonColor={'#b30086'}
          animation={true}
        />
        <Text style={{color:'#b30086'}}>FROM:</Text><DatePicker
         style={styles.input}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2019-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      <Text style={{color:'#b30086'}}>TO:</Text>
      <DatePicker
        style={styles.input}
        date={this.state.dat}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2000-05-01"
        maxDate="3000-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({dat: date})}}
      />
   <Text style={{color:'#b30086'}}>Time</Text>
   <DatePicker
        style={styles.input}
        date={this.state.tim}
        mode='time'
        // placeholder="select time"
        //format="HH:MM"
        //  confirmBtnText="Confirm"
        //cancelBtnText="Cancel"
        customStyles={{
          timeIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        is24Hour={true}
        // onConfirm={(times) => {this.setState({tim: times})}}
        onDateChange={(time) => {this.setState({tim: time})}}
      />
         {/* <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
         
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode="time"
        /> */}
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
      height:45,
      width:300,
      borderRadius:25,
      backgroundColor:"white",
      color: 'white',
      paddingHorizontal: 16,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize:16,
      
    
    },
    
});