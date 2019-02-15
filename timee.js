import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View, TouchableOpacity
} from 'react-native';

class StopWatch extends Component {



    constructor( props ) {
        super( props );

        this.state={
        timer: null,
        counter: '00',
        miliseconds: '00',
        hours: '00',
        startDisabled: true,
        stopDisabled: false 
        }
    }





    componentWillUnmount() {
        clearInterval(this.state.timer);
    }



    start = () => {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.miliseconds) + 1).toString(),
                count = (this.state.counter);
                hour=(this.state.hour);

            if( Number(this.state.miliseconds) == 59 ) {
                count = (Number(this.state.counter) + 1).toString();
                num = '00';
            }
            if( Number() == 59 ) {
                hour = (Number(this.state.hours) + 1).toString();
                count ='00';
                num = '00';
            }

            self.setState({
                hours: count.length ==1 ? '0'+count :count,
                counter: count.length == 1 ? '0'+count : count,
                miliseconds: num.length == 1 ? '0'+num : num
            });
        }, 0);
        this.setState({timer});
    }





    onButtonStart= () => {

        {this.start()}
        this.setState({startDisabled: true, stopDisabled: false});
    }


    onButtonStop= ()=> {
        clearInterval(this.state.timer);
        this.setState({startDisabled: false, stopDisabled: true});
    }


    onButtonClear= ()=> {
        this.setState({
            timer: null,
            counter: '00',
            miliseconds: '00',
            hours:'00'
        });
    }




    render() {
        return(
            <View style={{backgroundColor: 'light blue',width: 500,height:700}}>
               <Text>{this.state.counter}</Text>
                <Text>{this.state.miliseconds}</Text>
                <Text>{this.state.hours}</Text>
                <View style={{padding:10, margin:10}}>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.onButtonStart()}>
                     <Text style={styles.buttonText}>start</Text>
                  </TouchableOpacity>
                  </View>
                 <View style={{padding:10, margin:10}}>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.onButtonStop()}>
                    <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
                </View>
                <View style={{padding:10, margin:10}}>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.onButtonClear()}>
                     <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
                </View>
            </View>    
            
        );
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    counter: {
      fontSize: 60,
      textAlign: 'center',
      height: 60,
      margin: 10,
    },
    miniCounter: {
        fontSize:20,
        position: 'relative',
        top: -32,
        right: -50
    },
    buttonContainer: {
        backgroundColor:'#2980b9',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      buttonText: {
        color: 'white'
      }
});


module.exports = StopWatch;
