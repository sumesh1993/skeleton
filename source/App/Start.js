import React from 'react';
import Page from 'Services/Page';
import Event from 'Services/Event';
import {Dimensions} from 'react-native';
import Notification from 'Services/Notification';




import App from 'Templates/App';
import AppState from 'Models/App';



class Start extends Page {


    constructor(){
        super();
        require('App/Route');
        require('App/Events');
        //Notification.init();
        AppState.screen = Dimensions.get('window');

    }

    render () {
        return <App/>;
    }


};



export default Start;
