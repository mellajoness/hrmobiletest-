import React, {Component} from 'react';
import 'react-native-gesture-handler'
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SwiperScreen from './views/swiper'
import DeliveryScreen from './views/delivery'
import DetailsScreen from "./views/details";

const LandingRoute = createStackNavigator({
     Swiper: SwiperScreen,
     Delivery: DeliveryScreen,
     Details: DetailsScreen,
 
}, {    
    initialRouteName:'Swiper', 
    headerMode: 'none'
});


const MainRoute = createSwitchNavigator({
    LandingRoute: LandingRoute,
    //  Drawer: DrawerRoute,
   
}, {
    initialRouteName: 'LandingRoute'
});

   
export default  createAppContainer(MainRoute);