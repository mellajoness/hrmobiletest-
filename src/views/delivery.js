
import React, { Component } from 'react';
import {
    Dimensions,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    Text, 
    Alert, FlatList, InteractionManager,
} from 'react-native';
import {GET_SERVICE} from "../shared/backend";
import {CustomLoader} from "../shared/activityindicator";
import {SAVE_DELIVERY} from '../shared/storage'
const NumberFormat = require('react-number-format');
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

export default class DeliveryScreen extends Component {
    state = {
        deliveryList: [],
        loading: false 
    }

    async componentDidMount()
    {
        await this.getDelivery();
    }

    header= () => {
        return(
          <View style={{height: 60, width: Dimensions.get('screen').width,backgroundColor:'#26CB2E',justifyContent:'center' }} >
          <View style={{flex:1}}>
<View >
              <View style={{ flexDirection:'row',paddingTop:15,paddingHorizontal:20 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Swiper')} >
                 <AntDesign name='arrowleft' size={30} color='white' style={{}}/> 
              </TouchableOpacity>
              <View style={{flex:1}}> 
              <Text style={{color:'white',fontSize:21,textAlign:'center'}}>Delivery </Text>
               </View>
          </View>
        
        </View>
         </View> 
         <CustomLoader visible={this.state.loading}/>
         
        
      </View>)
      }

    async getDelivery () {   
        this.setState({loading: true});
        const endpoint = '/v2/deliveries'; 
        try {    
            const response = await GET_SERVICE(endpoint);
            this.setState({loading: false});
            if(response.status===200)
            { 
                console.log('response', response.data);
                this.setState({deliveryList: response.data})
                } 
            else
            {
                InteractionManager.runAfterInteractions(() => {
                    setTimeout(() => {
                        Alert.alert('Error Occurred', response.data.message);
                    });
                });
            }
        } catch (e) {
            InteractionManager.runAfterInteractions(() => {
                setTimeout(() => {
                    Alert.alert('Error Occurred', "An error has occurred. Kindly check your internet connection.");
                });
            });
        }
    };



    goDeliveryDetails(item){
    //save data in local storage
      SAVE_DELIVERY(item);
        console.log('my items index',item)
        this.props.navigation.navigate('Details',{
          deliveryData:{
            loanInstances:[item]
          }
      })
      }




    _renderItem(item, index,) {
 
        console.log('data', item);
             return (  
           
            <TouchableOpacity onPress= {()=>this.goDeliveryDetails(item)} style={{marginTop:0, backgroundColor: 'white', borderTopLeftRadius:5, borderTopRightRadius:5,borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginStart: 15,paddingRight:20}}>
                <View  style={{flexDirection: 'row'}}> 
                 <View  style={{paddingTop:10}} >
                   <Image source={{uri:item.goodsPicture}} style={{width:60, height:60,borderRadius:60}} />
                  </View>
                  <View style={{flexDirection: 'column',paddingHorizontal:10}}>
                  <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'#504f4f',fontSize:16, paddingTop:13,fontWeight:'bold'}}>FROM:</Text>
                    <Text style={{color:'#9c9c9c',fontSize:15, paddingTop:17,lineHeight:17}}> {item.sender.name}</Text>
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

                 <View style={{justifyContent:'center'}}>
                 <NumberFormat renderText={text => <Text style={{color:'#3F3F3F',fontSize:16,lineHeight:17,paddingTop:10}}>{item.deliveryFee}</Text>} value='6700' displayType={'text'} thousandSeparator={true} prefix={'₦'} /> 
                 </View>
                 <CustomLoader visible={this.state.loading}/>
            </View> 
           
            </TouchableOpacity>
        );
    }

    render() {
        return (
          
            <View style={{flex:1}}>
                <FlatList
                    extraData={this.state}
                    data={this.state.deliveryList}
                    renderItem={({item, index,}) => this._renderItem(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={this.header}
                    stickyHeaderIndices={[0]}
                    // ItemSeparatorComponent={Divider}
                />
            </View>
            
        );
      }
}
