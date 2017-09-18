
import React, { Component } from 'react';
import {View} from 'react-native';


class Repeat extends Component {



    render() {

      let items = this.props.items;
      let Parent = this.props.children;
      let Children = Parent.children;

      if (!items || items.length == 0) {
        return null;
      }

      // let views = items.map(function (item, i) {
      //   return Children;
      // });



      return (
        <Parent/>
      );




    }


}





export default Repeat;
