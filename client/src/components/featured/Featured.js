import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import matrix from "../../assets/img/matrix.png";

const Featured = ({ type }) => {
    return (
        <div className="h-[90vh] relative flex flex-col">
            {type && (
                <div className="absolute top-[150px] left-[50px]">
                    <span className="mr-[10px] text-white">{type === "movie" ? "Movies" : "TV Series"}</span>
                    <select className="cursor-pointer" name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="w-[100%] h-[100%] object-cover"
            />
            <div className="w-[35%] absolute left-[50px] bottom-[100px]">
                <img src={matrix} alt="" className="w-[400px]" />
                <span className="text-white">Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion. </span>
                <div className="gap-[10px] flex mt-[20px]">
                    <button className="bg-white py-[10px] px-[20px] border-none rounded-[3px] flex items-center justify-center"><PlayArrowIcon /><span>Play</span></button>
                    <button className="bg-white py-[10px] px-[20px] border-none rounded-[3px] flex items-center justify-center"><InfoOutlinedIcon /><span>Info</span></button>
                </div>
            </div>
        </div>
    )
}

export default Featured
