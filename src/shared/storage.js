
 import AsyncStorage from '@react-native-community/async-storage';

export const SAVE_DELIVERY = (value) => {
    AsyncStorage.setItem('save_delivery', JSON.stringify(value));
};

export const GET_SAVE_DELIVERY = async () => {
    const value = await AsyncStorage.getItem('save_delivery');
    return value ? JSON.parse(value) : {};
};



