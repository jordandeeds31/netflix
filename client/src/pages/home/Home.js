import React, { useState, useEffect } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar';
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGQ4ZWE0YzM0NTVkMzY1Y2U0NmI2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTY5NzkyOSwiZXhwIjoxNjc2MTI5OTI5fQ.MaWdPWo042S8yN8EfQP0ip1-x4P9fc22owCDvGvJVAY"
            }
          })
        console.log(res.data);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getRandomLists()
  }, [type, genre])
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home
