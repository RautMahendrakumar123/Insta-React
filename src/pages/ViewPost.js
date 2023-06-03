import React, { useContext, useEffect, useState } from 'react'
import icon from "../images/icon.png"
import camera from "../images/camera.png"
import { Link, json } from 'react-router-dom'
import "./viewpost.css"
import Card from './Card'


function ViewPost() {
  
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_BASE_URL}/posts`)
    .then(res=>res.json())
    .then(data=>{
      setPosts(data)
    })
  },[])
console.log(posts)
  return <div className='main'>
    <div className='viewpost-header'>
        <header className='header'>
            <span><img src={icon}/></span>
            <Link to="/form"><span><img src={camera}/></span></Link>
        </header>
        <hr/>
    </div>
    <div>
    {
      posts.map((item,_id)=>{
       return <Card item={item} key={_id}/>
      })
    }
    </div>
  </div>
}

export default ViewPost