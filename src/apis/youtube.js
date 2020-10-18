import axios from 'axios'

const KEY = 'AIzaSyAFeZPX5VLqzLIX9a4urWl025xBHEQoSXo'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type:'video'
    }
})