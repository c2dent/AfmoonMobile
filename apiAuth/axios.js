import axios from 'axios';
import Constants from 'expo-constants';
const { manifest } = Constants;

axios.defaults.baseURL = 'http://' + ((typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
? manifest.debuggerHost.split(`:`).shift().concat(`:8000/`) : `api.example.com`);

axios.defaults.header = "Access-Control-Allow-Origin: *";
console.log(axios.defaults.baseURL)

export default axios;