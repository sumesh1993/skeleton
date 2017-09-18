/*Templates*/

import React from 'react';
import Page from 'Services/Page';
import Event from 'Services/Event';
import { observer } from 'Services/Model';


import AppState from 'Models/App';
import Styles from 'Design/Menu';
import Route from 'Services/Route';

import Icon from 'react-native-vector-icons/FontAwesome';




import { View, Text, TouchableOpacity,Image } from 'react-native';


@observer
export default class Menu extends Page {


  render () {

      return (
          <View style={{flex:1,backgroundColor:'#fff'}}>

                  <View style={Styles.logoContainer}>
                      <Text style={Styles.titleText}>Gharelu Help</Text>
                  </View>

                  <View style={Styles.border} />



                  <TouchableOpacity onPress={()=>{Route.push('home')}}>

                      <View style={Styles.drawerListItem}>
                          <Icon style={Styles.drawerMenuIcon} name='home'/>
                          <Text style={Styles.drawerMenuText}>Home</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{Route.push('services')}}>

                      <View style={Styles.drawerListItem}>
                          <Icon style={Styles.drawerMenuIcon} name='cutlery'/>
                          <Text style={Styles.drawerMenuText}>Services</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{Route.push('attendance')}}>

                      <View style={Styles.drawerListItem}>
                          <Icon style={Styles.drawerMenuIcon} name='calendar-check-o'/>
                          <Text style={Styles.drawerMenuText}>Attendance</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{Route.push('profile')}}>

                      <View style={Styles.drawerListItem}>
                          <Icon style={Styles.drawerMenuIcon} name='user'/>
                          <Text style={Styles.drawerMenuText}>My Profile</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={Event.get('page.logout')}>

                      <View style={Styles.drawerListItem}>
                          <Icon style={Styles.drawerMenuIcon} name='sign-out'/>
                          <Text style={Styles.drawerMenuText}>Logout</Text>
                      </View>
                  </TouchableOpacity>



          </View>

      );
    }






}
