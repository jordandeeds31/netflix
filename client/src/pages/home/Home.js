import React from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home
