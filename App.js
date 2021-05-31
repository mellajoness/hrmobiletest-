
import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar, View, SafeAreaView, Platform,BackHandler, Alert,Text  } from 'react-native';
import Page from './src/routes';  
import store from './store'
import { Provider } from 'react-redux';

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
        <Provider store={store}>
         <View style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
           <StatusBar backgroundColor='green' barStyle={'light-content'} />
           <Page/>   
          </SafeAreaView>
         </View>
        </Provider>
      );
  } 
}

// console.disableYellowBox = true;
