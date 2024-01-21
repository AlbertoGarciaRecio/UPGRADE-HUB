import axios from 'axios';

const APIHeader = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': {
        toString(){
            return `Bearer ${localStorage.getItem('token')}`;
        }
    }
}

export const API = axios.create({
    headers: APIHeader,
    timeout: 1000000,
    baseURL: 'http://localhost:5001/'
});

