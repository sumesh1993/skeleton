
import { Component } from 'react';
import Event from 'Services/Event';
import Alert from 'Widgets/Alert';



class Page extends Component {

    static _this = {};


    componentDidMount(){
        // const name = this.constructor.name;
        // Event.fire(name.toLowerCase()+'.init');
        // Alert.show('Are you sure ?', name);
}

    componentWillReceiveProps(props){
        //const name = this.constructor.name;
        //Event.fire(name.toLowerCase()+'.props', props);
    }

    componentWillUnmount(){
        //const name = this.constructor.name;
        //Event.fire(name.toLowerCase()+'.terminate');
    }


    static updateState(){
        //Page._this.forceUpdate();
    }




}



export default Page;
