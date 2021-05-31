import {FETCH_DELIVERY,DELIVERY_DETAILS,FAVORITE} from '../actions/types'
const initialState ={
    item:[],
    loading:false,
    selectedMessageList: {},
    isActive: false
}

export default deliveryReducer=(state=initialState,action)=> {
    switch(action.type){
        case FETCH_DELIVERY:
           console.log('Reducer Works')
          return {
              ...state,
              item:action.payload,loading:true
          }

          case DELIVERY_DETAILS:
            console.log('Details Reducer Works',action.payload)
           return {
               ...state,
               selectedMessageList:action.payload
           }

           case FAVORITE:
            console.log('Favorite Reducer work')
           return {
               ...state,
               isActive:!state.isActive
           }
        default:
            return state;
    }
}