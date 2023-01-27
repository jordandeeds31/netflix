import React, { useState } from 'react'
import torino from "../../assets/img/granTorino.jpeg";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import exampleVideo from "../../assets/video/exampleVideo.mp4";

const ListItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-[225px] h-[200px] text-white cursor-pointer listItem" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}  >
      <img src={torino} alt="" className="h-[200px] object-cover listImg" />
      {isHovered && (
        <>
          {/* <video className="exampleVideo" src={exampleVideo} autoPlay={true} loop/> */}
          <div className="items-center">
            {/* <div className="mr-[4px] justify-between flex">
              <PlayArrowIcon className="" />
              <AddIcon />
              <ThumbUpOutlinedIcon />
              <ThumbDownOutlinedIcon />
            </div>
            <div className="text-[14px] gap-[10px] flex">
              <span>1 hour 14 minutes</span>
              <span className="limit">+16</span>
              <span>2002</span>
            </div>
            <div>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </div>
            <div>
              <span>Action</span>
            </div> */}
          </div>
        </>
      )}
  </div>
  )
}

export default ListItem
