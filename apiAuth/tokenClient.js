import axios from 'axios';
import {apiConfig} from '../config/config';

const client = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        Accept: 'application/json',
    }
})

export default client;