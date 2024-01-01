// import axios from 'axios';

const utubeApi = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&topicId=/m/04rlf&type=video&key=${process.env.REACT_APP_YOUTUBE_KEY}`;

export { utubeApi };
