import React,{Component} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

let dirs;
let image_Data;
let file_Path;

export default class tests extends Component{
constructor(props) {
    super(props);
    this.state = {

    }
}
componentDidMount() {
  dirs = RNFetchBlob.fs.dirs
  image_Data = 'iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAYFBMVEUAAAAAQIAAWpwAX5kAX5gAX5gAX5gAXJwAXpgAWZ8AX5gAXaIAX5gAXpkAVaoAX5gAXJsAX5gAX5gAYJkAYJkAXpoAX5gAX5gAX5kAXpcAX5kAX5gAX5gAX5YAXpoAYJijtTrqAAAAIHRSTlMABFis4vv/JL0o4QvSegbnQPx8UHWwj4OUgo7Px061qCrcMv8AAAB0SURBVEjH7dK3DoAwDEVRqum9BwL//5dIscQEEjFiCPhubziTbVkc98dsx/V8UGnbIIQjXRvFQMZJCnScAR3nxQNcIqrqRqWHW8Qd6cY94oGER8STMVioZsQLLnEXw1mMr5OqFdGGS378wxgzZvwO5jiz2wFnjxABOufdfQAAAABJRU5ErkJggg=='
  file_Path =dirs.DCIMDir + '/samp.png'
}

ImageDownload = () => {
    RNFetchBlob.fs.writeFile(file_Path, image_Data, 'base64').then(res => {
      if(res === parseInt(res, 10)){
        Alert.alert('','Saved Successfully');
      }
      else{
          Alert.alert('Error !');
      }
    })

}


render() {
    return (
        <View style={{ flex: 1, backgroundColor:'#81ecec', justifyContent: 'center', alignContent: 'center'}}>
                <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                           <TouchableOpacity
                             style={{ backgroundColor: 'salmon', height: 40, width: 150, justifyContent: 'center', alignItems: 'center' }}
                             onPress={() => {
                                 this.ImageDownload();
                             }}
                            >
                                <Text>Image</Text>
                           </TouchableOpacity>
                </View>
        </View>
    );
}
}