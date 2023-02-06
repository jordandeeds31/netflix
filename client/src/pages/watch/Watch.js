import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import exampleVideo from "../../assets/video/exampleVideo.mp4"
import { useLocation } from "react-router-dom";

const Watch = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div className="text-white">
            <div className="flex items-center absolute top-[10px] left-[10px] cursor-pointer z-[2]">
                <ArrowBackIcon />
                Home
            </div>
            <div>
                <video src={exampleVideo} autoPlay={true} loop progress controls className="w-screen h-screen" />
            </div>
        </div>
    )
}

export default Watch
