
import PushNotification from 'react-native-push-notification';
import Alert from 'Widgets/Alert';
import { Platform, PushNotificationIOS } from 'react-native';
import { DB, Event, Route } from 'Services';

import moment from 'moment';


export default class Notification {


 static init(){

     PushNotification.configure({

       permissions: {
             alert: true,
             badge: true,
             sound: true
         },

       onRegister: function(id) {
         console.log(JSON.stringify(id));
        },

        onNotification: function(notification) {



         }



          });
}




  static schedule(message, time, data){

    //   let date;
      //
      //
    //     date = new Date(time);
    //     //date = new Date(Date.now() + (time  * 60000));
      //
      //
    //   PushNotification.localNotificationSchedule({
    //       message: message,
    //       date: date,
    //       largeIcon: '',
    //       smallIcon: "ic_launcher",
    //       color: "#146fa9",
    //       userInfo: data,
    //       userInfoAndroid: data,
    //       repeatType:'day',
    //       repeatInterval:'day',
      //
    //   });


}

  static clear(){

    PushNotification.cancelAllLocalNotifications();


  }



}
