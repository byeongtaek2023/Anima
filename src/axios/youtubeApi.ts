import axios from 'axios';
    
    
const UtubeAxios = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&topicId=/m/04rlf&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
})
export default UtubeAxios;


