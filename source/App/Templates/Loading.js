// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View, Animated, Image, Easing, TouchableHighlight,Dimensions
// } from 'react-native';
// import { Container, Header, Title} from 'native-base';
// import Theme from 'Design/Theme';
// import Styles from 'Design/Attendance';
// import AppState from 'Models/App';
//
//
//
// let value = 0.25;
//
// export default class Loading extends Component {
//
//   constructor () {
//       super()
//       this.animatedValue = new Animated.Value(0)
//     }
//
//     componentDidMount () {
//       this.animate(value);
//     }
//
//
//     animate (toValue) {
//
//       Animated.timing(
//         this.animatedValue,
//         {
//           toValue: toValue,
//           duration: 600,
//           easing: Easing.elastic(1.15),
//           delay: 300,
//
//         }
//       ).start(() => this.animate(toValue += value))
//
//     }
//
//
//   render() {
//
//     let { height, width } = Dimensions.get('window');
//
//     const rotateZ = this.animatedValue.interpolate({
//         inputRange: [0,0.25,0.5,0.75,1],
//         outputRange: ['0deg','90deg','180deg','270deg','360deg']
//       })
//
//     return (
//
//
//       <Container theme={Theme}>
//         <Header>
//             <Title>{this.props.title}</Title>
//         </Header>
//         <View style={Styles.border} />
//
//         <View style={{backgroundColor:'#fff',alignItems:'center',marginTop: height/3}}>
//
//           <View style={{width:60,height:60,borderRadius:30,backgroundColor:'#ece6cf',alignItems:'center',justifyContent:'center'}}>
//             <View style={{height:5,width:5,borderRadius:2.5,backgroundColor:'#776151',left:3,top:27,position:'absolute'}}></View>
//             <View style={{height:5,width:5,borderRadius:2.5,backgroundColor:'#776151',right:3,top:27,position:'absolute'}}></View>
//             <View style={{height:5,width:5,borderRadius:2.5,backgroundColor:'#776151',bottom:3,left:27,position:'absolute'}}></View>
//             <View style={{height:5,width:5,borderRadius:2.5,backgroundColor:'#776151',top:3,left:27,position:'absolute'}}></View>
//
//             <Animated.View style={{
//               width:60,height:60,borderRadius:30,alignItems:'center',
//               backgroundColor:'transparent',transform:[{rotateZ:rotateZ}]
//             }}>
//             <Image source={require('Assets/analoghours.png')} style={{top:-16}}/>
//             </Animated.View>
//         </View>
//
//           <Text style={{marginTop:20,color:'#776151',fontSize:16}}>Loading...</Text>
//
//         </View>
//       </Container>
//     );
//   }
// }
