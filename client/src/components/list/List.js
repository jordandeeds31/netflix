import React, { useRef, useState } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

const List = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const listRef = useRef();
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <div className="w-[100%] mt-[10px]">
            <span className="text-white text-[20px] ml-[50px]">Continue to Watch</span>
            <div className="relative mt-[10px]">
                <ArrowBackIosNewOutlinedIcon className="z-[10] w-[50px] cursor-pointer opacity-[.2] left-0 absolute bg-black text-white sliderArrow left" onClick={() => handleClick("left")} style={{display: !isMoved && "none"}}/>
                <div className="flex ml-[50px] w-max gap-[5px] listContainer mb-[20px]" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlinedIcon className="w-[50px] right-0 cursor-pointer opacity-[.2] absolute bg-black text-white sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List
