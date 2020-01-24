import axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {apiConfig} from '../config/config';

const getAccesToken = async () => {
    try {
        const retrievedItem = await AsyncStorage.getItem('tokenData');
        if (retrievedItem !== null) {
            const item = JSON.parse(retrievedItem);
            console.log(item);
            const authorization = `Bearer ${item.token}`;
            return authorization;
        }
        return null;
    } catch (error) {
        console.log(error)
    }
}

const loginClient = axios.create({
    baseURL: apiConfig,
    headers: {
        Accept: 'application/json',
    }
})

const getLoginClient = async () => {
    loginClient.defaults.headers.common.Authorization = await
    getAccesToken();
    return loginClient;
}

export default getLoginClient;