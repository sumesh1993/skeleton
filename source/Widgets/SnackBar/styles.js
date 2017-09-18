'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({


  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:40,
  },

  error: {
    backgroundColor:'#ff4444',
  },

  success: {
    backgroundColor:'#1bbc9b',
  },


});
