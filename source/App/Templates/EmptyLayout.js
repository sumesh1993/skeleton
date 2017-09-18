// /*Templates*/
//
// import React,{Component} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { View, Text, Dimensions, Image, ActivityIndicator} from 'react-native';
// import { Container, Header, Title} from 'native-base';
// import Theme from 'Design/Theme';
// import Styles from 'Design/Attendance';
//
//
//
// export default class EmptyLayout extends Component {
//
//   render () {
//
//     if(!this.props.visible)
//         return null;
//
//     let { height, width } = Dimensions.get('window');
//
//
//     return (
//       <Container theme={Theme}>
//           <Header>
//
//               <Title> </Title>
//
//           </Header>
//           <View style={Styles.border} />
//         <View style={{alignItems:'center'}}>
//             <Image source={require('Assets/page-logo.png')} style={{marginTop:height/4,marginBottom:20}}/>
//             <ActivityIndicator
//                     animating={true}
//                     size="large"
//                   />
//         </View>
//       </Container>
//     )
//
//   }
//
//
//
// }
