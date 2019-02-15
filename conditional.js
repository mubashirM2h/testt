import React,{Component} from 'react';
import {Text,View,BackHandler, Alert} from 'react-native';

class ItemViewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
      isGreeting:'2'
    }
}
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            Alert.alert("Logout", "Are you sure you want to logout?", [{ text: "Cancel", onPress: () => {}, style: "cancel" }, { text: "Logout", onPress: () => this.handleLogout() }], { cancelable: true });
            return true;
        });
    }
    
    componentWillUnmount() {
        this.backHandler.remove();
    }
    
    handleLogout() {
        global.screenName = "Homeh";
        return this.props.navigation.navigate("Homeh");
    }
    render() {
        return (
            <View>
                {this.state.isGreeting ? (<View style={{backgroundColor:'red'}}><Text style={{color:'green'}}>hiiii</Text></View>): <View style={{backgroundColor:'steelblue'}}><Text style={{color:'white'}}>nooo</Text></View>}
            </View>
        );
    }
}
export default ItemViewComponent;