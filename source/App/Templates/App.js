/*Templates*/

import React from 'react';
import { observer } from 'Services/Model';
import { DB, Api, Page, Event, Route } from 'Services';

import DrawerLayout from 'react-native-drawer-layout'
import { StatusBar, View} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';


import Menu from 'Templates/Menu';
import SnackBar from 'Widgets/SnackBar';

import {  Text, TouchableOpacity } from 'react-native';

import State from 'Models/App';

@observer
export default class App extends Page {




  render () {

    State.this = this;

    Event.on('drawer.init', (ref)=>{
        Route.drawer = ref;
    });


    //Route
    Event.on('route.init', (page, navigator)=>{

        Route.navigator = navigator;

        if(!page)
            return Event.fire('app.init');

        page.render = true;

        return <page.template />;

    });





    return (

       <DrawerLayout
        ref={Event.get('drawer.init')}
        onDrawerStateChanged={Event.get('drawer.onchange')}
        drawerBackgroundColor="#fff"
        statusBarBackgroundColor="#42220e"
        drawerWidth={270}
        drawerLockMode={State.drawer_locked_mode}
        keyboardDismissMode="on-drag"
        renderNavigationView={()=>{return <Menu />}}
        >

         <NavigationExperimental.Navigator renderScene={Event.get('route.init')} configureScene={Event.get('route.transition')}/>

         <View style={{position:'absolute', bottom:0, left:0, right:0, height:40}}>
             <SnackBar visible={State.snackbar.show} message={State.snackbar} onPress={Event.get('snackbar.hide')} />
         </View>

      </DrawerLayout>






    )


  }



}
