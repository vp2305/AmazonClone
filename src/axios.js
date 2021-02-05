import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-341d6.cloudfunctions.net/api',// THE API (clous function) URL
    //'http://localhost:5001/clone-341d6/us-central1/api/' cd..
    

});

export default instance;