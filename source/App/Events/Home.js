/*Events*/


import AppState from 'Models/App';
import PageState from 'Models/Home';
import { DB, Api, Page, Event, Route, Location } from 'Services';


Event.on('home.init', function(){

    Event.fire('home.resume');

});


Event.on('home.resume', function(){

    Event.fire('home.refresh');

});


Event.on('home.refresh', function(){


    AppState.drawer_locked = false;


});
