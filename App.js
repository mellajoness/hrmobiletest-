
import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar, View, SafeAreaView, Platform,BackHandler, Alert,Text  } from 'react-native';
// import { DARK_PRIMARY_COLOR, PRIMARY_COLOR } from './src/shared/colors';
// import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Page from './src/routes';  
// import SwiperScreen from './src/views/swiper';
// import DeliveryScreen from './src/views/delivery'
// import DetailsScreen from './src/views/details';
export default class App extends React.Component {

  constructor(properties) {
      super(properties);
     }

  backAction = () => {
      Alert.alert("Alert!", "Are you sure you want to exit the app", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };
 


  // statusBarIOS() {
  //     if (Platform.OS === 'ios') {
  //         return <View style={{ backgroundColor: PRIMARY_COLOR, height: 22 }} />
  //     }

  //     return null
  // }



  componentDidMount() {
      this.backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        this.backAction
      );
    }
  
    componentWillUnmount() {
      this.backHandler.remove();
    }

  render() {
      return (
         <View style={{ flex: 1 }}>
             {/* {this.statusBarIOS()} */}
                      <SafeAreaView style={{ flex: 1 }}>
                          <StatusBar backgroundColor='green' barStyle={'light-content'} />
                       
                                 <Page/>   
                               {/* <SwiperScreen/> */}
                      {/* <DeliveryScreen/> */}
                      {/* <DetailsScreen/> */}
                      </SafeAreaView>
                  </View>
           
      );
  } 
}

console.disableYellowBox = true;
