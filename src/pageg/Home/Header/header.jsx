import React from 'react'
import { useState } from 'react'
import './header.css/'
import Head1 from '/headerimg/headimg1.jpg'
import Head2 from '/headerimg/headimg2.jpg'

function header() {
  
  const images =[
    Head1,
    Head2
  ];

  const slider = () =>{
    const [slide,setslide]=useState(0);
  }

  const prevslid =()=>{
    setslide((index -1 + images.length) % images.length)
  };

  const nextslide = () =>{
    setslide((index +1) % images.length)
  }
  return (
    <>
      <div className="headmain">
        <div className="slidebar">
          <div className="slider-track">
            {
              images.map((src,i) =>(
                <img src={src} key={i} className='slid-image'/>
              ))
            }
          </div>
          <button onClick={prevslid} className='prev'>prev</button>
          <button onClick={nextslide} className='next'>next</button>

        </div>
      </div>




    </>
  )
}

export default header
