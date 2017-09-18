

export default class Event {

    static _cache = {};


    static on(key, callback){
        Event._cache[key] = callback;
    };


    static fire(key){

        if(!Event._cache[key])
            return;
        Event._cache[key].call(...arguments);


    };


    static get(key){
        if(Event._cache[key])
            return Event._cache[key].bind(...arguments);
        else
            return function(){console.warn('Event is not defined')};
    };





}
