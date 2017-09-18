

import Event from './Event';
import Transitions from './Transitions';



export default class Route {

    static _cache = {};
    static history = [];
    static drawer = false;
    static navigator = false;


    static add(key, params){
        Route._cache[key] = params;
    };


    static get(key){
        return Route._cache[key];
    };


    static all(key){
        return Route._cache;
    };


    static set(key){
        Route.drawer.closeDrawer();
        Route.push(key);
    };


    static push(key, resume){


        let event = 'init';

        Route.drawer.closeDrawer();
        const current = Route.current();

        if(current == key)
          return;


        Route.history.push(key);

        const page = Route.get(key);

        if(!page)
            return Route.error(key);

        page.render = false;

        const stack = Route.navigator.getCurrentRoutes();

        for (var i = 1; i < stack.length; i++) {
           if(stack[i].key == key)
              page.render = true;
        }

        if(resume){

          event = 'resume';
          if(!page.render){
            Event.fire(key+'.'+event);
            Route.navigator.push(page);
          }
          else{
            Event.fire(key+'.resume');
            Route.navigator.jumpTo(page);
          }

        }

        else if(!page.render){
          Event.fire(key+'.'+event);
          Route.navigator.push(page);
        }

        else{
            Event.fire(key+'.resume');
            Route.navigator.jumpTo(page);
        }



    };

    static pop(){

        const current = Route.current();
        const previous = Route.previous();

        if(!previous)
            return;

        Route.history.pop();

        const page = Route.get(current);

        page.render = false;

        Route.navigator.pop();

        Event.fire(previous+'.resume');

    };

    static refresh(){

        const current = Route.current();

        Event.fire(current+'.refresh');

    };

    static resume(page){

        Route.push(page,true);

    };


    static transition(name){

        let animation;

        switch(name){

            case 'none':
                animation = Transitions.NONE;
            break;

            case 'right':
                animation = Transitions.FROMRIGHT;
            break;

            case 'bottom':
                animation = Transitions.FROMBOTTOM;
            break;
            case 'nobackswipe':
                animation = Transitions.NoBackSwipe;
            break;
        }

        return animation;

    };



    static current(){

      const count = Route.history.length;

      if(count < 1)
          return 'none';

      return Route.history[count-1];

    };


    static previous(){

      const count = Route.history.length;

      if(count < 2)
          return false;

      return Route.history[count-2];


    };


    static error(page){
        console.warn('Invalid route '+page+', check in App/Route.js');
    };








}
