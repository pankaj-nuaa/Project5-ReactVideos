import axios from 'axios';

const KEY = 'AIzaSyB6wm41oRHX2qUm7qX-x462ky4n32SVH-Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

