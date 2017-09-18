
import React, { Component } from 'react';
import Modal from 'react-native-modalbox'
import { View, Text, TouchableOpacity} from 'react-native';


import Styles from './styles.js';


class SnackBar extends Component {


    // componentWillReceiveProps(props){
    //     console.warn('ok');
    // }


    //<SnackBar visible={false}, message={{type:q,text:qqq}}/>

    render() {

        return (

            <Modal
                position={"bottom"}
                entry={"bottom"}
                backdrop={false}
                isOpen={this.props.visible}>

                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={[Styles.container, Styles[this.props.message.type]]}>
                    <Text style={{color:'#fff'}}>{this.props.message.text}</Text>
                    </View>
                </TouchableOpacity>

            </Modal>



        );

    }


}





export default SnackBar;
