import React,{Component} from 'react';
import {View, Text,StyleSheet, Image,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';


const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };


export default class App extends Component {
constructor(props){
    super(props);
    this.state = {
      pickedImage:'https://facebook.github.io/react-native/docs/assets/favicon.png',
    }
}

pickImageHandler=()=>{
    ImagePicker.showImagePicker(options, (response) => {
       
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
          this.setState({
            pickedImage: source,
          });
        
        }
      });
  
    
}

  
    render() {
      return (
          
        <View style={styles.container}>
        <Text style={styles.textStyle}>Pick Image From Camera and Gallery </Text>
          <View style={styles.placeholder}>
            <TouchableOpacity 
             onPress={()=>this.pickImageHandler()}
            >
            <Image source= {this.state.pickedImage} style={styles.previewImage} />
            </TouchableOpacity>
            
          </View>
         
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems:"center"
    },
    textStyle: {
      fontWeight:"bold",
      fontSize:30,
      textAlign:"center",
      color:"red",
      marginTop:10
    },
    placeholder: {
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: "#eee",
      width: "70%",
      height: 280,
      marginTop:50,
    },
    button: {
      width: "80%",
      marginTop:20,
      flexDirection:"row",
      justifyContent: "space-around"
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
  });