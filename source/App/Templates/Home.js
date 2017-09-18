/*Templates*/

import React from 'react';
import { observer } from 'Services/Model';
import { DB, Api, Page, Event, Route } from 'Services';


import { View, Text, Image, Linking,TouchableOpacity, ActivityIndicator,ScrollView} from 'react-native';

import Theme from 'Design/Theme';
import Styles from 'Design/Home';


import AppState from 'Models/App';
import PageState from 'Models/Home';
import Button from 'Widgets/Button';



@observer
export default class Home extends Page {





  render() {


    return (

        <View style={{flex:1,backgroundColor:'#fff'}}>

             <Text>Hello</Text>


        </View>

    );

  }

}
