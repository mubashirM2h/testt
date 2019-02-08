import React, { Component } from 'react';
import {Text,View,FlatList,StyleSheet} from 'react-native';

export default class neww extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res =>res.json())
        .then(res =>{
            this.setState({
                data:res
        });
    });
}
render(){
    return(
        <View style={styles.container}>
        <View style={{backgroundColor:'red',padding: 10,flex:1}}>
        <FlatList 
        data={this.state.data}
        renderItem={({item})=>
            <View style={{backgroundColor:'black' ,flex:1 ,flexDirection:'row',marginBottom: 3}}>
            <Text style={{color:'white'}}>ID:{item.id}</Text>
            <Text style={{color:'white'}}>NAME:{item.name}</Text>
            <Text style={{color:'white'}}>E MAIL:{item.email}</Text>
            </View>}
        />
        </View>
        </View>
    )};
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    }
  });