import React,{Component} from 'react';
import {Text, View, styleSheet, AsyncStorage} from 'react-native';

export default  class savedata extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            passw:''
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
    console.log('hii',value);
        }
        catch(error){
console.log(error);

        };
    }


    render(){
        
        return(
            <View style={{backgroundColor:'black'}}>
            <Text style={{backgroundColor:'lightblue'}}>Welcome {this.state.value}</Text>
            <Text style={{backgroundColor:'steelblue'}}>U r password is {this.state.passw}</Text>
            </View>
        );
    }
}