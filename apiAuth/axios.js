import axios from 'axios';
import Constants from 'expo-constants';
import { AsyncStorage } from 'react-native';
const { manifest } = Constants;

axios.defaults.baseURL = 'http://' + ((typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
? manifest.debuggerHost.split(`:`).shift().concat(`:8000/`) : `api.example.com`);

AsyncStorage.getItem('token').then((token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }
})

axios.defaults.header = "Access-Control-Allow-Origin: *";
console.log(axios.defaults.baseURL)

export default axios;