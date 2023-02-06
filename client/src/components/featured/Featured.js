import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import matrix from "../../assets/img/matrix.png";
import { useState, useEffect } from 'react';
import axios from "axios";

const Featured = ({ type }) => {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTEyMDAzMzgzYmMxYmZlZmRkMmQwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY5ODQ1NCwiZXhwIjoxNjc2MTMwNDU0fQ.0Y8fj93JiqypKojqwy-8NS5Luj2y5j1vRDwG8vaLo7k",
                            'Access-Control-Allow-Origin': '*'
                        }
                    }
                )
                console.log(res.data[0]);
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomContent();
    }, [type])
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
                src={content.img}
                alt=""
                className="w-[100%] h-[100%] object-cover"
            />
            <div className="w-[35%] absolute left-[50px] bottom-[100px]">
                <img src={matrix} alt="" className="w-[400px]" />
                <span className="text-white">{content.desc}</span>
                <div className="gap-[10px] flex mt-[20px]">
                    <button className="bg-white py-[10px] px-[20px] border-none rounded-[3px] flex items-center justify-center"><PlayArrowIcon /><span>Play</span></button>
                    <button className="bg-white py-[10px] px-[20px] border-none rounded-[3px] flex items-center justify-center"><InfoOutlinedIcon /><span>Info</span></button>
                </div>
            </div>
        </div>
    )
}

export default Featured
