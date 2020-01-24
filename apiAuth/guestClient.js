import axios from 'axios';
import {apiConfig} from '../config/config';
import Constants from "expo-constants";
const { manifest } = Constants;

const client = axios.create({
    baseURL: (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:19002`) : `api.example.com`
})
axios.defaults.header = "Access-Control-Allow-Origin: *";

export default client;

function getUrl(config) {
    if(config.baseURL) {
        return config.url.replace(config.baseURL, '');
    }
    return config.url
}