import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import {View,Text} from 'react-native';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: '...'
    };
    ArrowKeysReact.config({
      left: () => {
        this.setState({
          content: 'left key detected.'
        });
      },
      right: () => {
        this.setState({
          content: 'right key detected.'
        });
      },
      up: () => {
        this.setState({
          content: 'up key detected.'
        });
      },
      down: () => {
        this.setState({
          content: 'down key detected.'
        });
      }
    });
  }
  render() {
    return (
      <View {...ArrowKeysReact.events} tabIndex="1">
       <Text> {this.state.content}</Text>
      </View>
    );
  }
}
 
export default App;