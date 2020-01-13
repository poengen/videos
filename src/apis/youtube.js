import axios from 'axios';

const KEY = 'AIzaSyDMIomX2VuLf_iQtw21l01_79z0M5pd_JA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
