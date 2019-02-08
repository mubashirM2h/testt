import React,{ Component } from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

export default class apiimpl extends Component{
    constructor(props){
        super(props);
        this.state={
            data :[]
        }
    }
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res =>res.json())
        .then(res => {
            this.setState({
                data:res
            });
        });
    }
    render(){
        return(
            <View>
                <FlatList data={this.state.data}
                renderItem={({item})=>
                    <View style={{color:'white'}}>
                        <Text>{item.id}</Text>
                        <Text>{item.title}</Text>
                        <Text>{item.url}</Text>
                    </View>
                    }
                />
            </View>
        );
    }
}