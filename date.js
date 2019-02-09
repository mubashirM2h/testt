import React,{Component} from 'react';
import {View, Text} from 'react-native';
import { Calendar, CalendarList, Agenda,timestamp } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Arrow from 'react-native-arrow';
import moment from "moment";


LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.']
};


LocaleConfig.defaultLocale = 'fr';
let current='';
export default class datet extends Component{
  constructor(props) {super(props);
    this.state = {
     currentDate: new Date(),
     markDate: moment(new Date()).format("YYYY-MM-DD")
    };
    console.log(this.state.markDate);
    current=this.state.markDate
    
   }
  

  render()
  {
    
    return(
      <View style={{backgroundColor:'lightblue',width:400}}>
          <Calendar
  // Initially visible month. Default = Date()
  
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2000-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'3000-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  //renderArrow={(direction) => (<Arrow />)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}


  markedDates={{
    [current]: {selected: true, marked: true, selectedColor: 'blue', dotColor: 'green'},
    // '2019-02-10': {marked: true},
    // '2019-02-12': {marked: true, dotColor: 'red', activeOpacity: 0},
    // '2019-02-14': {disabled: true, disableTouchEvent: true}
  }}
/>

      </View>
    );
  }
}