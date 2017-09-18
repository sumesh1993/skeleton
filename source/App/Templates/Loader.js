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
//
//
//
// export default class Loader extends Component {
//
//     state = {
//     circles: [
//       new Animated.Value(0.2),
//       new Animated.Value(0.2),
//       new Animated.Value(0.2)
//     ]
//   };
//
//   componentDidMount(){
//     this.state.circles.forEach((val,index) => {
//       const timer = setTimeout(()=>{
//         this.animate(index)
//       },index*150);
//     this.timers.push(timer);
//   });
//   }
//
//   componentWillUnmount() {
//     this.timers.forEach((timer) => {
//       clearTimeout(timer);
//     });
//
//     this.unmounted = true;
//
//   }
//
//   timers =[];
//
//   animate(index){
//       Animated.sequence([
//         Animated.timing(this.state.circles[index],
//         {
//           toValue:1,
//           duration:600,
//           easing: Easing.quad,
//
//         }),
//         Animated.timing(this.state.circles[index],
//         {
//           toValue:0.2,
//           duration:600,
//           easing: Easing.quad
//         })
//       ])
//       .start(()=>{
//         if(!this.unmounted) {
//           this.animate(index);
//         }
//       })
//
//   }
//
//
//   render() {
//
//         let { height, width } = Dimensions.get('window');
//
//       const animations = this.state.circles.map((a,i) => {
//         return <Animated.View key={i} style={{opacity:this.state.circles[i],marginRight:8,height:24,width:24,borderRadius: 12, backgroundColor:'rgba(128,128,128,0.2)' ,transform: [{scale: this.state.circles[i]}] }} />
//       })
//
//
//     return (
//
//       <Container theme={Theme}>
//           <Header>
//               <Title>{this.props.title}</Title>
//           </Header>
//           <View style={Styles.border} />
//           <View style={{alignItems:'center'}}>
//               <Image source={require('Assets/page-logo.png')} style={{marginTop:height/4, marginBottom:30}}/>
//           </View>
//         <View style={styles.container}>
//
//           {animations}
//
//         </View>
//       </Container>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems:'center',
//     justifyContent:'center',
//     backgroundColor: 'white',
//   }
// });
