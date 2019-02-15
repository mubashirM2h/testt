import React, { Component } from 'react';
import {  FlatList, StyleSheet, Text,NetInfo, View} from 'react-native';



export default class FlatListBasics extends Component {

    constructor(props){
    super(props);
    this.state={
          message:'hello world',
          data:[]
    };
}

componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(res=>  {
        console.log('response',res);        
        this.setState({          
          data: res                         
        });  
        
       
        
    }
    );  
}
componentDidMount(){
    NetInfo.isConnected.fetch().then(isConnected => {
        console.log('First, is ' + (isConnected ? 'online' : 'offline'));
      });
      function handleFirstConnectivityChange(isConnected) {
        console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
        NetInfo.isConnected.removeEventListener(
          'connectionChange',
          handleFirstConnectivityChange
        );
      }
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange
      );
   
}


render(){
    return(
        <View style={styles.container}>
        <View style={{flex: 1,padding:10,backgroundColor:'steelblue'}}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => 
            <View style={{flex:1,padding:30,backgroundColor:'#FFF',flexDirection: 'row' ,marginBottom: 3}}>
            <View style={{height:80,width:80 ,marginRight:10}}>
            </View>
            <View style={{flexDirection:'column'}}>
             <Text>Id: {item.id}</Text>
             <Text>name: {item.name}</Text>
             <Text>email: {item.email}</Text>
             <Text>body: {item.body}</Text>
             </View>
              </View>           
          }
        />
        
        </View>
      </View>
)};
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
  });