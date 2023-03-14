import axios from 'axios';

export let api = axios.create({
    baseURL:"https://rocket-site-front.netlify.app"
});

