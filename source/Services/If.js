
import React, { Component } from 'react';


class If extends Component {



    render() {

      if(typeof this.props.show === 'undefined'){

        if(!this.props.hide)
          return   this.props.children;
        else
          return null;
      }
      if(typeof this.props.hide === 'undefined'){

        if(this.props.show)
          return   this.props.children;
        else
          return null;
      }

      return null;



    }


}





export default If;
