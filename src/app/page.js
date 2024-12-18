"use client"

import React, {useState,useEffect} from 'react';
import {Typewriter} from 'react-simple-typewriter';

const IMAGES=[
  'image/img1.jpg',
  'image/img2.jpg',
  'image/img3.jpg',
  'image/img4.jpg',
  'image/img5.jpg',
  'image/img6.jpg',
  'image/img7.jpg'
];
let carouselInstance;

function Navbar(){
  return(
    <nav className='nav'>
      <Typewriter
      words={['Play stupid games', 'Win stupid prizes']}
      loop={0}
      cursor
      cursorStyle='_'
    />
    </nav>
  );
}

function BigCarousel(){
  const [bgImage, setBgImage] = useState(IMAGES[0]);
  const [isVisible, setIsVisible] = useState('');

  function handleChange(item){
    const activeKey = item.getAttribute('data-activekey');
    setIsVisible('');
    setBgImage(IMAGES[activeKey]);
    setTimeout(() => {setIsVisible('visible');},100);
  }

  useEffect(() => {
    const initCarousel = () => {
      const elem = document.querySelector('.carousel');
      if (elem && window.M?.Carousel) {
        carouselInstance = window.M.Carousel.init(elem, { onCycleTo: handleChange });
      }
    };
  
    if (typeof window !== 'undefined' && window.M) {
      initCarousel();
    } else {
      const interval = setInterval(() => {
        if (window.M) {
          initCarousel();
          clearInterval(interval);
        }
      }, 100);
    }
  }, []);

  return(
    <div className={`bg ${isVisible}`}>
      <img src={bgImage} alt="Very cool background"/>
    </div>
  );

}

function LittleCarousel(){
  const [autoSlide, setAutoSlide] = useState(true);
  const MouseInCarousel = () => {setAutoSlide(false)};
  const MouseOutCarousel = () => {setAutoSlide(true)};

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(autoSlide)
        carouselInstance.next();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [autoSlide]);

  const littleCarousel = IMAGES.map((image,index) =>
      <div className='carousel-item' key={index} data-activekey={index}>
        <img src={image} alt={`Thumb ${index + 1}`} />
      </div>
  );

  return (
    <div className='carousel-box' onMouseEnter={MouseInCarousel} onMouseLeave={MouseOutCarousel}>
      <div className='carousel'>
        {littleCarousel}
      </div>
    </div>
  );
}

function Content(){
  const Para = <>
  <s>Play stupid games, win stupid prizes.</s> &raquo; Compete in thrilling <b>games and challenges</b> and test your skills in <b>coding, puzzles, and more!</b> It's all about excitement and having a blast with friends. Try your best to walk away with all the <b>prizes!</b></>

  return(
    <div className='glass'>
      <div className='content'>
        <h1>Welcome to</h1>
          <h2><b><Typewriter words={['AYASCHAYA']} loop={0} cursor cursorStyle='_' /></b>
          <br/>
          <span id='yr'>2K25</span></h2>
        <p>{Para}</p>
        <button>LOGIN</button>
      </div>
    </div>
  );
}

export default function SmoothLanding(){
  return(
    <div>
      <Navbar/>
      <div className="container-fluid custom-grid">
      {/* Top Content */}
      <div className="content top-content">
        <div className="p-3 bg-primary text-white rounded">
        <BigCarousel/>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="content bottom-content">
        <div className="p-3 bg-secondary text-white rounded">
        <LittleCarousel/>
        </div>
      </div>
    </div>
      <Content/>
    </div>
  );
}