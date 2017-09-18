
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import If from 'Services/If';
import Icon from 'react-native-vector-icons/FontAwesome';




class Button extends Component {


    render() {

      const icon = this.props.icon?this.props.icon:false;
      const text = this.props.text?this.props.text:false;
      const style = this.props.type?this.props.type:'default';


        return (

              <TouchableOpacity onPress={this.props.onPress} style={[BodyStyle.base,BodyStyle[style],this.props.style]}>
                  <If show={icon}>
                    <Icon name={icon} style={[IconStyle.base,IconStyle[style]]}/>
                  </If>
                  <If show={text}>
                    <Text style={[TextStyle.base,TextStyle[style]]}>{text}</Text>
                  </If>
              </TouchableOpacity>

        );

    }


}





const BodyStyle = {


  base:{
    padding:8,
    flexDirection: 'row',
    backgroundColor:'blue',
    justifyContent:'center',
    borderRadius:5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor:'#000',
    shadowOffset:{width: 0, height: 2},
    shadowOpacity:0.2,
    shadowRadius:2,
    elevation:3,


  },

  default:{
    backgroundColor:'blue',
  },
  primary:{
    backgroundColor:'#146fa9',
    paddingHorizontal:30,
  },
  success:{
    backgroundColor:'#1db955'
  },
  cancel:{
    backgroundColor:'#ff4444'
  },

  transparent:{
    backgroundColor:'transparent',
    shadowColor:undefined,
    shadowOffset:undefined,
    shadowOpacity:undefined,
    shadowRadius:undefined,
    elevation:undefined,
  },

  'primary-outline':{
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#d2671c',
    shadowColor:undefined,
    shadowOffset:undefined,
    shadowOpacity:undefined,
    shadowRadius:undefined,
    elevation:undefined,
  },

  'primary-circle':{
    backgroundColor:'#cc0000',
    width:36,
    height: 36,
    borderRadius:18,
    marginRight:8,
  },

  'primary-bigCircle':{
    backgroundColor:'#cc0000',
    width:56,
    height: 56,
    borderRadius:28,
  },


}

const IconStyle = {

  base:{
    padding:2,
    color: 'white',
    fontSize: 15,
    alignSelf: 'center'
  },

  default:{
    color: 'white'
  },

  primary:{
    color: 'white'
  },

  'primary-outline':{
    color: '#d2671c'
  },

  'primary-circle':{
    fontSize: 17
  },

  'primary-bigCircle':{
    fontSize: 20
  },


  transparent:{
    color: 'white',
  },


}


const TextStyle = {

  base:{
    padding:2,
    color: 'white',
    fontSize: 15,
    alignSelf: 'center'
  },

  default:{
    color: 'white'
  },

  primary:{
    color: 'white'
  },

  'primary-outline':{
    color: '#d2671c',
    fontWeight: '400'
  },

  transparent:{
    color: '#146fa9',
  },

  success:{
    fontSize:13,
  }


}





export default Button;
