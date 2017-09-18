/*Events*/

import State from 'Models/App';
import Event from 'Services/Event';
import Route from 'Services/Route';




Event.on('network.start', (response)=>{

    State.loading = true;

});



Event.on('network.success', (response)=>{

    State.loading = false;


    for (var key in response.events) {
  	  Event.fire('server.'+key, response.events[key]);
  	}


	if(!response.message)
		return;

  if(response.message)
      Event.fire('snackbar.show', response.message);

});

Event.on('network.error', function(){

    State.loading = false;

    let message = {
        type: 'error',
        text: 'No internet connection'
    };

    Event.fire('snackbar.show', message);

});



Event.on('server.page.push', function(page){
    Route.push(page);

});

Event.on('server.page.load', function(page){
    
    Route.push(page);

});


Event.on('server.page.refresh', function(){
    Route.refresh();
});

Event.on('server.page.pop', function(){
    Route.pop();
});
