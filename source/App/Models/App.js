/*Models*/

import { computed, observable } from 'Services/Model';





class Snackbar {

    @observable show = false;
    type = 'error';
    text = 'Default Test message';

}




class App {

    @observable user = false;
    @observable loading = false;
    @observable isOpen = false;
    @observable drawer_locked = false;
    @observable snackbar = new Snackbar();

    @computed get drawer_locked_mode(){
        return this.drawer_locked ? 'locked-closed' : 'unlocked';
    }


    @observable modal = { show:false, content:false , height:0};



}







export default new App();
