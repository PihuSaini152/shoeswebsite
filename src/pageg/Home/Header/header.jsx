import React from 'react'
import { useState,useEffect } from 'react'
import './header.css/'
import Head1 from '/headerimg/headimg1.jpg'
import Head2 from '/headerimg/headimg2.jpg'

const header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image:Head1,
      title: "First Slide Heading",
      subtitle: "Some subtitle or tagline.",
    },
    {
      image: Head2,
      title: "Second Slide Heading",
      subtitle: "Another message or call to action.",
    },
    
  ];

  const NextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const PrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(NextSlide, 5000); // 5 seconds per slide
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="headmain">
      <header className="carousel-container">
      <div className="carousel">
        <div
          className="carousel-slide"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
          }}
        >
          <div className="carousel-caption">
            <h5>{slides[currentIndex].title}</h5>
            <p>{slides[currentIndex].subtitle}</p>
          </div>
        </div>

        <button className="carousel-control-prev" onClick={PrevSlide}>
          &lt;
        </button>
        <button className="carousel-control-next" onClick={NextSlide}>
          &gt;
        </button>
      </div>
    </header>
    <h1>hfxdghfcxhgfchf</h1>
    jcgjyuvcur  
    </div>
  );
};


export default header
