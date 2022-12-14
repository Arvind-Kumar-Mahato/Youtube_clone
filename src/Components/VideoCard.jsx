import React from 'react'
import {Link} from 'react-router-dom';
import { Typography,Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoChannelUrl } from '../utils/constants';
const VideoCard = ({video :{id:{videoId}, snippet}}) => {

    // console.log(videoId,snippet);
  return (
   <Card sx={{width:{xs:'100%',sm:'358px', md:'320px'}, boxShadow:'none', borderRadius:0}}>
    <Link to = {videoId ? `/video/${videoId}`:
    demoVideoUrl}>
        <CardMedia image = {snippet?.thumbnails?.high?.url}
            alt = {snippet?.title}
            sx = {{width:{
                xs:'100%', sm:'358px', md:'320px'}, height:180}}
        />
    </Link>
   </Card>

    
  )
}

export default VideoCard;
