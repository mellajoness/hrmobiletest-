import {Alert, InteractionManager} from 'react-native';
import {GET_SERVICE} from "../../shared/backend";
import {DELIVERY_API} from '../../shared/endpoint'
import {DELIVERY_DETAILS, FAVORITE, FETCH_DELIVERY} from '../actions/types'
export const  fetchDelivery=(navigation)=>async(dispatch)=>{
    console.log('Delivery Action')
        try {    
            const response = await GET_SERVICE(DELIVERY_API);
            if(response.status===200) { 
              console.log('response',response.data)
              dispatch({
                  type:FETCH_DELIVERY,
                  payload:response.data
              })  
            }  
            else{
              dispatch({
                   type:FAILED_DELIVERY,
                   payload:response.message
                })  
            }
        } catch (e) {
            InteractionManager.runAfterInteractions(() => {
                setTimeout(() => {
                    Alert.alert('Error Occurred', "An error has occurred. Kindly check your internet connection.");
                });
            });
        }
   
}

export const deliveryDetails=(data)=>async(dispatch)=>{
      dispatch({
        type:DELIVERY_DETAILS,
        payload:data
    }) 
}

export const favorite=()=>async(dispatch)=>{
    dispatch({
      type:FAVORITE,
    //   payload:data
  }) 
}