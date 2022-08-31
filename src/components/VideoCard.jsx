import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card ,CardContent,CardMedia } from '@mui/material'
import {CheckCircle} from "@mui/icons-material"
import { demoThumbnailUrl ,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from '../utils/constants'
import { fetchVideo } from '../utils/fetchFromAPI'


const VideoCard = ({  video: {  id:{  videoId},snippet  }  ,video}  ) => {
  // to get the viewers count 
  
  // useEffect(() => {
 
  //   fetchVideo(`videos?part=statistics/&id=${videoId}`)
  //     .then((data) => console.log(data))
  //   }, []);
    
  return (

    <Card sx={{borderRadius:0,maxWidth:{md:"320px",xs:"240px",boxShadow:"none"}}}>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
      <CardMedia 
      alt={snippet?.title}
      image={snippet?.thumbnails?.high?.url}
      sx={{width:"358px",height:"180px"}}
      ></CardMedia>
      </Link>
      <CardContent sx={{backgroundColor:"#0C0B0B",height:"106px","&:hover":{
        backgroundColor:"#1A1616", transition:"0.3s"
      }}}>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight={"bold"} color="white">{snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
    </Link>
    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight={"bold"} color="gray">{snippet?.channelTitle ||demoChannelTitle}
          <CheckCircle sx={{fontSize:12,color:"gray",ml:"5px"}}></CheckCircle>
        </Typography>
    </Link>
    <Typography variant="subtitle2"></Typography>
      </CardContent>
    </Card> 
  )
}

export default VideoCard