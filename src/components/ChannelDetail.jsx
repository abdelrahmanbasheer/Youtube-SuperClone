import React from 'react'
import { useState,useEffect } from 'react'
import {useParams} from "react-router-dom"
import { Box } from '@mui/material'
import Videos from "./Videos"
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const ChannelDetail = () => {
  
  const { id } =useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
useEffect(()=>{
fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]))
fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))

},[id])
  return (
   <Box minHeight={"95vh"}>
    <Box>
      <div style={{background: "linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(6,86,172,1) 61%, rgba(6,89,174,1) 62%, rgba(0,212,255,1) 100%)",zIndex:10,
    height:"300px"}}></div>
    <ChannelCard channelDetail={channelDetail} marginTop="-110px"></ChannelCard>
    </Box>
    <Box display="flex" p="2">
    <Box sx={{m:{sm:"30px"}}}>  </Box>
    <Videos videos={videos}></Videos>
   
    </Box>
   </Box>
  )
}

export default ChannelDetail