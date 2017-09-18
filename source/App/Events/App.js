/*Events*/



import React from 'react';

import DB from 'Services/DB';
import Api from 'Services/Api';
import Event from 'Services/Event';
import Route from 'Services/Route';
import Alert from 'Widgets/Alert';
import dismissKeyboard from 'dismissKeyboard';


import State from 'Models/App';
import HomeState from 'Models/Home';
import SplashScreen from 'react-native-splash-screen'




//Boot
//Timer
Event.on('timer', (milliseconds, callback)=>{
    clearTimeout(Event._cache['_timer']);
    Event._cache['_timer'] = setTimeout(callback, milliseconds);
});



//App

Event.on('app.init', ()=>{


    DB.get('user').then((user)=>{

        State.user = user;
        Event.fire('app.ready');



    });



    setTimeout(()=>{SplashScreen.hide()},1600);

});


Event.on('app.update', ()=>{



});




Event.on('app.ready', ()=>{


    let page = 'home';

    if(State.user){
        page = 'home';
        Api.init(State.user);
    }

    // page = 'forgot.password';
    Route.set(page);


});

//Drawer


Event.on('drawer.open', ()=>{
    Route.drawer.openDrawer();
    dismissKeyboard();
});

Event.on('drawer.close', ()=>{
    Route.drawer.closeDrawer();

});

Event.on('drawer.toggle', ()=>{
    Route.drawer.openDrawer();
    dismissKeyboard();
    State.isOpen = false;

});

Event.on('drawer.onchange', (state)=>{

});



Event.on('route.transition', (page)=>{

    if(!page)
        return;

    if(!page.animation)
        page.animation = 'none';

    return Route.transition(page.animation);

});

Event.on('page.set', (page)=>{
    Route.set(page);
});

Event.on('page.push', (page)=>{
    Route.push(page);
});

Event.on('page.pop', ()=>{
    Route.pop();
    State.drawer_locked = false;
});


Event.on('page.logout', ()=>{
  const message = 'You want to logout';

  Alert.show('Are you sure ?', message, ()=>{
    Route.push('sign-in');
});

});







//Snackbar

Event.on('snackbar.show', (snackbar)=>{


    if(!snackbar.type){

        snackbar = {
            type: 'error',
            text: 'Please provide valid a {type:x,text:y} object'
        };

    }

    snackbar.show  = true;
    State.snackbar = snackbar;


    Event.fire('timer', 3000, ()=>{
        State.snackbar.show = false;
    });




});



Event.on('snackbar.hide', ()=>{
    State.snackbar.show = false;
});
