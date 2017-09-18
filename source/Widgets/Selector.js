
import React, { Component } from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Radio extends Component {



    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress}>

                <Text style={{color:'#42220e'}}>{this.props.selected ? 'SELECTED' : 'SELECT ME'}  </Text>

            </TouchableOpacity>
        );
    }
}
