import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-ionicons';

 export default class ImagesPosts extends Component {
   state = {
     buttonColor: 'gray',
     commentDisplay:'none',
     commenText:'',
     likeButton: true
     
   };

  changeColorLikeButton = () => {
    this.setState({
      buttonColor: this.state.buttonColor == 'gray' ? 'red' : 'gray',
      likeButton: this.state.likeButton == true ? false : true
    })
    console.warn(this.state.likeButton)
  }

  commentButton = () => {
    this.setState({
      commentDisplay: this.state.commentDisplay == 'none' ? 'flex' : 'none'
    })
  }

   render() {
     return (
       <View style={{margin: '6%'}}>
         <View style={{display:'flex', justifyContent:'space-between',flexDirection:'row', marginBottom:5}}>
         <Image style={{height:45, width:45, backgroundColor:'gray', borderRadius:45, borderColor:'red',borderWidth:0.5}} />
         <TouchableOpacity style={{paddingTop:'2%'}}>
           <Icon
             style={{color: 'gray'}}
             name="more">
             {' '}
           </Icon>
         </TouchableOpacity>
             </View>
         <View
           style={{width: '100%', height: 380, backgroundColor: 'gray'}}></View>
         <View style={{display: 'flex', flexDirection: 'row'}}>
           <TouchableOpacity>
             <Icon
               onPress={this.changeColorLikeButton}
               style={{color: this.state.buttonColor}}
               name="heart-empty">
               {' '}
             </Icon>
           </TouchableOpacity>
           <TouchableOpacity onPress={this.commentButton}>
             <Icon style={{color: 'gray'}} name="text">
               {' '}
             </Icon>
           </TouchableOpacity>
           <TouchableOpacity>
             <Icon style={{color: 'gray'}} name="return-right"></Icon>
           </TouchableOpacity>
         </View>
         <View style={{display:this.state.commentDisplay}}>
           <TextInput
           onEndEditing={()=>{
             this.setState({
              commentDisplay:'none'
             })
           }} 
           onChangeText={(e)=>{
             console.log(e)
             this.setState({
               commenText: e
              })
            }}
            placeholder={'Comentario...'} 
            style={{backgroundColor:'#ebeced',borderRadius:3,width:'50%'}} />
            </View>
            <Text>{this.state.commenText}</Text>
       </View>
     );
   }
 }


// export default class ImagesPosts extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           spinValue: new Animated.Value(0),
//           color: '#F62459',
//       }
//   }

//   rotateSpring = () => {
//       Animated.spring(
//           this.state.spinValue,
//           {
//               toValue: 1,
//               friction: 1,
//           }
//       ).start();
//       this.setState({
//           color: this.state.color == '#F62469' ? '#FFC107' : '#F62469',
//       })
//   };

//   render() {
//       var spin = this.state.spinValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: ['0deg', '360deg'],
//       });

//       return (
//           <View >
//               <Text >Header</Text>
//               <View >
//                   <TouchableWithoutFeedback onPress={this.rotateSpring}>
//                       <Animated.View style={{
//                           transform: [{rotate: spin},],
//                           backgroundColor: this.state.color
//                           }}>
//                           <Icon name="ios-add" color="white" size={50}/>
//                       </Animated.View>
//                   </TouchableWithoutFeedback>
//               </View>
//           </View>
//       );
//   }
// }