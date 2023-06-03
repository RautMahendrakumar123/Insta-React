import React from 'react'
import home from "../images/home.png"
import { Link } from 'react-router-dom'
import "./home.css"

function Home() {
  return <div className='root-container'>
            <div className='main-container'>

            <div className='left-container'>
                <img src={home} alt='insta home' id='image' />
            </div>
            <div className='right-container'>
                <div  className='text-div'>
                 10X team 04
                </div>
                <div>
                  <Link to="/post"><button className='btn'>Enter</button></Link>
                </div>
            </div>
            </div>
          </div>
}

export default Home
