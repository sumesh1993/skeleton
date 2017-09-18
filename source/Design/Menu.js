'use strict';

import { Platform } from 'react-native';



export default {

  theme:{
    iconFamily: 'CustomIcons',
    iconFontSize: (Platform.OS === 'ios' ) ? 30 : 28,
    listBorderColor: 'rgba(0,0,0,0.1)',
    listDividerBg: 'rgba(0,0,0,0.2)',
    listItemHeight: 40,
    listItemPadding: 9,
    listNoteColor: '#808080',
    listNoteSize: 13,
    borderWidth: 2,


  },

  logoContainer: {

    justifyContent:'center',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#42220e'

  },

  logoStyle: {

    height:80,
    width:80,



  },


  titleText: {
      fontSize: 23,
      color: '#fff',
      fontWeight: '400',
      padding:10,

  },

    border: {
      height:5,
      backgroundColor: '#d2671c',

  },


  drawerListItem:{

    flexDirection:'row',
    paddingLeft:20,
    paddingTop:20,
    paddingBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'rgba(100,100,100,0.2)'


  },

    drawerLogo:{
            paddingTop:30,
            justifyContent: 'center',
            alignItems: 'center',
    },

    drawerMenuIcon:{
      color: '#42220e',
      fontSize: (Platform.OS === 'ios') ? 22 : 22,

    },

    drawerMenuText:{
      color: '#42220e',
      fontSize: (Platform.OS === 'ios') ? 18 : 18,
      marginLeft:20,


    }

}
