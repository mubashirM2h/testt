import React from 'react';
import { Text, View ,FlatList} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class neww extends React.Component{
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
class places extends React.Component{
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
          </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
  Home: neww,
  Settings: SettingsScreen,
  button: places,
});

export default createAppContainer(TabNavigator);