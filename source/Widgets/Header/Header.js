
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, ActivityIndicator} from 'react-native';

import If from 'Services/If';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'Widgets/Button';






class Header extends Component {


    render() {

              const style = this.props.type?this.props.type:'default';



        return (

              <View style={[BodyStyle.base,BodyStyle[style]]}>
                <Button type='transparent' icon={this.props.icon} onPress={this.props.buttonPress} />
                <Text style={[TitleStyle.base,TitleStyle[style]]}>{this.props.title}</Text>
                <ActivityIndicator color='#fff' size='small' animating={this.props.animating ? this.props.animating : false} style={{alignSelf:'center'}} />
              </View>
        );

    }


}





const BodyStyle = {


  base:{
    flexDirection: 'row',
    backgroundColor:'#146fa9',
    justifyContent:'space-between',
    shadowColor:'#000',
    shadowOffset:{width: 0, height: 2},
    shadowOpacity:0.2,
    shadowRadius:2,
    elevation:3,
    height:(Platform.OS === 'ios' ) ? 64 : 56,
    paddingHorizontal: 15,
    paddingTop: (Platform.OS === 'ios' ) ? 15 : 0,


  },

  default:{
    backgroundColor:'#42220e',
  },

}

const TitleStyle = {


  base:{
    alignSelf:'center',
    color:'white',
    fontSize:(Platform.OS === 'ios' ) ? 17 : 19,
    fontWeight:(Platform.OS === 'ios' ) ? '500' : undefined,

  },

  default:{
    color:'white',
  },

}





export default Header;
