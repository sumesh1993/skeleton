
import React, { Component } from 'react';
import { Icon} from 'native-base';

import ActionButton from 'react-native-action-button';
import Route from 'Services/Route';
import Event from 'Services/Event';



import Styles from './styles.js';


class FloatingButton extends Component {

  constructor(props){
    super(props);

  }



  render() {





    return (

      <ActionButton
        buttonColor="rgba(250,250,250,1)"
        buttonTextColor="#333"
        offsetY={this.props.offsetY}
        offsetX={this.props.offsetX}
        position="right"
        icon={<Icon name="plus" style={[Styles.actionButtonIcon,{color: "#333"}]} />}
        >
            <ActionButton.Item size={50} buttonColor='#146fa9' onPress={Event.get('relocate.park')}>
            <Icon name="park" style={Styles.actionButtonIcon,{color: '#fff'}} />
            </ActionButton.Item>
            <ActionButton.Item size={50} buttonColor='#146fa9' onPress={Event.get('relocate.show')}>
            <Icon name="relocate" style={Styles.actionButtonIcon,{color: '#fff'}} />
            </ActionButton.Item>
            <ActionButton.Item size={50} buttonColor='#146fa9' onPress={Event.get('relocate.testdrive')}>
            <Icon name="test-drive" style={Styles.actionButtonIcon,{color: '#fff'}} />
            </ActionButton.Item>

    </ActionButton>

    );

  }

}



module.exports = FloatingButton;
