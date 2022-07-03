import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"



const List = () => {
  return (
    <div className="list">

      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      </div>
    </div>

  )
}

export default List