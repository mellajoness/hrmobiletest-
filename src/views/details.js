import React, { Component } from 'react'
import {
    Dimensions,
    FlatList,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    Text,
    Modal,
    Alert,
    InteractionManager,
    SafeAreaView
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

export default class DetailsScreen extends Component {

    state = { 
        modalVisible: false,
        delivery: {}, 

    } 

      async componentDidMount() 
      { 
        let a= this.props.navigation.getParam('deliveryData').loanInstances[0].deliveryFee.slice(1)
         
        let b=this.props.navigation.getParam('deliveryData').loanInstances[0].surcharge.slice(1)  
        let c= (a + b)

        console.log('a',a)
        console.log('b',b)
        console.log('c',c)
        console.log('c',c)
          }
  abc(){

  }

        render() {
          let delivery= this.props.navigation.getParam('deliveryData').loanInstances[0]
          console.log('item data deliverynewww mount',delivery.deliveryFee)  
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
              <View  style={{height:50, backgroundColor:'#26CB2E',alignItems:'center',flexDirection:'row'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Delivery')} >
                 <AntDesign name='arrowleft' size={30} color='white' style={{}}/> 
              </TouchableOpacity >
                 <Text style={{color:'white',fontSize:19,textAlign:'center'}}>Delivery Details</Text>
              </View> 
           <View style={{marginTop:20, marginHorizontal:20, backgroundColor: 'white', borderTopLeftRadius:5, borderTopRightRadius:5,borderBottomColor:'#f8f8f8',borderBottomWidth:1, shadowOffset: { width: 0, height: 19 },
             shadowOpacity: 0.25, shadowRadius: 4.84, elevation:20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginStart: 15,paddingRight:20}}>
                <View  style={{flexDirection: 'row'}}> 
                 
                  <View style={{flexDirection: 'column',paddingHorizontal:10}}>
                  <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'#504f4f',fontSize:16, paddingTop:13,fontWeight:'bold'}}>FROM:</Text>
                    <Text style={{color:'#9c9c9c',fontSize:15, paddingTop:17,lineHeight:17}}> {delivery.sender.name}</Text>
                    </View>
                  </View>

                  <View style={{marginBottom:20,flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'#504f4f',fontSize:16, paddingTop:8,fontWeight:'bold'}}>To:  </Text>
                    <Text style={{color:'#9c9c9c',fontSize:15, paddingTop:13,lineHeight:17}}>Tunde Amos</Text>
                    </View>
                  </View>
                 </View>
                 </View>
             
            </View> 
           
            </View>



            <View style={{marginTop:20, marginHorizontal:20, backgroundColor: 'white', borderTopLeftRadius:5, borderTopRightRadius:5,borderBottomColor:'#f8f8f8',borderBottomWidth:1, shadowOffset: { width: 0, height: 19 },
             shadowOpacity: 0.25, shadowRadius: 4.84, elevation:20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginStart: 15,paddingRight:20}}>
                <View  style={{flexDirection: 'row'}}> 
              
                  <View style={{flexDirection: 'column',paddingHorizontal:10}}>
                  <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'#504f4f',fontSize:16, paddingTop:13,fontWeight:'bold'}}>Goods To Deliver</Text>
                    
                    </View>
                  </View>

                  <View style={{marginVertical:20,flexDirection:'row', justifyContent:'space-between'}}>
                  <Image style={{height:80,width:120,}}
                source={{uri:delivery.goodsPicture}} 
              /> 
                  </View>
                 </View>
                 </View>
            </View> 
            </View>
  
             
            <View style={{marginVertical:20, marginHorizontal:20, backgroundColor: 'white', borderRadius:5,borderBottomColor:'#f8f8f8',borderBottomWidth:1, shadowOffset: { width: 0, height: 19 },
             shadowOpacity: 0.25, shadowRadius: 4.84, elevation:20,paddingVertical:10}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginStart: 15,paddingRight:20}}>    
                <Text style={{color:'#504f4f',fontSize:16, paddingTop:0,fontWeight:'bold',lineHeight:17}}>Delivery Fee:</Text>
                 <Text style={{color:'#9c9c9c',fontSize:15, paddingTop:0,lineHeight:17,fontWeight:'bold'}}> {delivery.deliveryFee}</Text>
              </View>           
            </View> 

            <TouchableOpacity style={{height:50,borderColor:'#26CB2E',borderWidth:1,justifyContent:'center',alignItems:'center',marginHorizontal:20}}>
               <Text  style={{color:'#26CB2E',fontSize:17}}>Add To Favorite</Text> 
            </TouchableOpacity>
</View>
         
        );
      }
    
         
     
    }

