import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  
  
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "92a0a58e52msh8bf98f8ca6944cdp1390e8jsn4be3edd501fa",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) =>{
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
   return data;
}