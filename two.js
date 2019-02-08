import React, { Component } from 'react';
import {  FlatList, StyleSheet, Text, View, Button, Image  } from 'react-native';


export default class FlatListBasics extends Component {
  constructor(props){
    super(props);
this.state={
  initialArr :[{name:'Devin',phone:'9087787887',add:'Vinam',image:'https://facebook.github.io/react-native/docs/assets/favicon.png'},{name:'kevin',phone:'9072343433',add:'sysol',image:'https://facebook.github.io/react-native/docs/assets/favicon.png'}]
  }
  }

  
  render() {
    
    return (
      <View style={styles.container}>
        <View style={{flex: 1,padding:10,backgroundColor:'steelblue'}}>
        <FlatList
          data={this.state.initialArr}
          renderItem={({item}) => 
            <View style={{flex:1,padding:30,backgroundColor:'#FFF',flexDirection: 'row' ,marginBottom: 3}}>
            <View style={{height:80,width:80 ,marginRight:10}}>
              <Image style={{ width:80, height: 80}} source={{uri:item.image}} />
            </View>
            <View style={{flexDirection:'column'}}>
             <Text>Name: {item.name}</Text>
             <Text>phone: {item.phone}</Text>
             <Text>Company: {item.add}</Text>
             </View>
              </View>           
          }
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})