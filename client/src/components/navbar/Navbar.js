import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }


  return (
    <div className={isScrolled ? "text-white pl-[50px] pr-[50px] fixed w-[100%] z-50 bg-[#0b0b0b]" : "text-white pl-[50px] pr-[50px] fixed w-[100%] z-50 navbar"}>
      <div className="flex items-center justify-between h-[70px]">
        {/* left */}
        <div className="flex items-center gap-[20px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix" className="w-[150px] cursor-pointer" />
          <div className="flex gap-[10px]">
            <Link to="/">
              <span className="cursor-pointer">Homepage</span>
            </Link>
            <Link to="/series">
              <span className="cursor-pointer">Series</span>
            </Link>
            <Link to="/movies">
              <span className="cursor-pointer">Movies</span>
            </Link>
            <span className="cursor-pointer">New and Popular</span>
            <span className="cursor-pointer">My List</span>
          </div>
        </div>
        {/* right */}
        <div className="flex gap-[10px]">
          <SearchIcon className="text-white cursor-pointer" />
          <span>KID</span>
          <NotificationsIcon className="cursor-pointer" />
          <img src="" alt="" className="w-[40px]" />
          <div>
            <ArrowDropDownIcon className="cursor-pointer" onClick={() => setHover(!hover)} />
            <div>
              {
                hover && (
                  <div className="absolute flex flex-col bg-[#0b0b0b]">
                    <span className="cursor-pointer">Settings</span>
                    <span className="cursor-pointer">Logout</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
