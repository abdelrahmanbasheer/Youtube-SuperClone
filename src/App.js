import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import Navbar from "../src/components/Navbar"
import Feed from "../src/components/Feed"
import VideoDetail from "../src/components/VideoDetail"
import ChannelDetail from "../src/components/ChannelDetail"
import SearchFeed from "../src/components/SearchFeed"
const App = () => {
    return (
        <BrowserRouter>
         <Box sx={{backgroundColor:"black"}}>
          <Navbar></Navbar>  
          <Routes>
             <Route exact path='/' element={<Feed/>} />
             <Route path='/video/:id' element={<VideoDetail/>} />
             <Route path='/channel/:id' element={<ChannelDetail/>} />
             <Route path='/search/:searchTerm' element={<SearchFeed/>} />
           </Routes>
         </Box>
         
         </BrowserRouter>
        
     
       )
    }

export default App