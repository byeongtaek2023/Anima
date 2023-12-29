//엑시오스 베이스URL hook

import axios from 'axios';

const AniJson = axios.create({
  baseURL: `${process.env.REACT_APP_JSON_KEY}`
});
export default AniJson;
