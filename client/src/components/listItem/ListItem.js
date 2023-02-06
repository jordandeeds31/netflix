import React, { useState, useEffect } from 'react'
import torino from "../../assets/img/granTorino.jpeg";
import axios from "axios";
import { Link } from 'react-router-dom';

const ListItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovies] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/63de886c0181eb0a992558a4", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTEyMDAzMzgzYmMxYmZlZmRkMmQwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY5ODQ1NCwiZXhwIjoxNjc2MTMwNDU0fQ.0Y8fj93JiqypKojqwy-8NS5Luj2y5j1vRDwG8vaLo7k"
          }
        })
        console.log(item);
        console.log(res);
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMovie();
  }, [])
  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div className="w-[225px] h-[200px] text-white cursor-pointer listItem" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img src={torino} alt="" className="h-[200px] object-cover listImg" />
      </div>
    </Link>
  )
}

export default ListItem
