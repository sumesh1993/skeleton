'use strict';

import { Platform } from 'react-native';



export default {


    mainViewContainer:{
      backgroundColor:'#fff',
      zIndex: 1
    },

    autoCompleteContainer:{
        backgroundColor:'#fff',
    },

    clearButtonIcon : {
      color:'#bebebe',
      fontSize: 18
    },

    clearButtonContainer: {

      position:'absolute',
      right:0,

      top:(Platform.OS === 'ios' ) ? 0 : 0,
      zIndex: 1

    },

    listItem: {
      marginTop:4,
      paddingBottom:4,
      borderBottomColor: '#eee',
      borderBottomWidth: 1,


    },


    autoCompleteInputContainer: {
      marginTop:0,
      marginLeft:0,
      marginRight:0,
      marginBottom:0,
      paddingLeft:14,


    },

    infoTextStyle: {
      fontSize:(Platform.OS === 'ios' ) ? 11 : 12,
      color: '#a8a8a8',
      paddingLeft: 12,

    },

    textTextStyle:{
      fontSize: 13,
      paddingLeft: 12,
      color:'#000'
    },


}
