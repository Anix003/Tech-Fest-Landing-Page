"use client"

import React from 'react';
import ContactForm from '../../components/ContactForm';
import Developers from '../../components/Developers';

function ImageGallery(){
  const GALLERY=[
    'image/img1.jpg',
    'image/img2.jpg',
    'image/img3.jpg',
    'image/img5.jpg',
    'image/img6.jpg',
    'image/img7.jpg',
    'image/img1.jpg',
    'image/img2.jpg',
    'image/img3.jpg',
    'image/img5.jpg',
    'image/img6.jpg',
    'image/img7.jpg',
    'image/img1.jpg',
    'image/img2.jpg',
    'image/img3.jpg',
    'image/img5.jpg',
    'image/img6.jpg',
    'image/img7.jpg',
  ]

  const imggallery = GALLERY.map((image,index) =>
    <img src={image} key={index} alt=''/>
  );

  return(
    <div className='masoncontainer'>
      <div className='masonry'>{imggallery}</div>
    </div>
  );
}

function Opening(){
  const para=<p id='bigpara'>Welcome to AYASCHAYA, the pinnacle of innovation and tradition here at GCETTS. Celebrating years of excellence
  <span id='dots'>...</span>
  <span id='more'>, the Tech Fest has become a hallmark of our legacy, bringing together the brightest minds, fostering collaboration and creativity. Join us for a day of excitement, learning, and unforgettable memories!<br/>~Supreme Advisor of Coding Club, ChatGPT</span></p>

  function ReadMore(){
    const dots = document.getElementById('dots');
    const more = document.getElementById('more');
    const readmore = document.getElementById('readmore');

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      more.style.display = "none";
      readmore.innerHTML = "Read more";
    } else {
      dots.style.display = "none";
      more.style.display = "inline";
      readmore.innerHTML = "Read less";
    }
  }

  return(
    <div className='techfest'>
        <div className='para-info-poster'>
          <div id='para-info'>
            {para}
            <button id='readmore' onClick={() => ReadMore()}>Read more</button>
            <div id='info'>
              <button>Overview</button>
              <button>Participation</button>
              <button>Events</button>
            </div>
          </div>
          <img src='image/lololol.jpeg' alt='poster'/>
        </div>
      </div>
  );
}

function TextSlider(){
  const GAMELIST = ["LUDO", "Carrom", "Free Fire", "BGMI", "FIFA", "PES", "Arm Wrestling", "Decode", "Aptitude", "Tech Quiz", "Memory Game", "Debate", "Rubik's Cube", "Treasure Hunt", "Musical Chair", "Ball-in-Bucket", "Pass the Ball"];

  const slidertext = GAMELIST.map((game, index) =>
    <div key={index + 1} id='gamecard'>{game}</div>
  );

  const lotsahyphens = GAMELIST.map((game, index) =>
    <div id='hyphen'  key={index}></div>
  );

  return(
    <>
    <div className='hyphenslider'>{lotsahyphens}</div>
    <div className='textslider'>
      <div className='cardset'>{slidertext}</div>
      <div className='cardset' aria-hidden='true'>{slidertext}</div>
    </div>
    <div className='hyphenslider'>{lotsahyphens}</div>
    </>
  );
}

function About(){
  const UNIONMEMBERS = [{
      pic: 'image/img1.jpg',
      post: 'General Secretary',
      name: 'Anal Chakrabarty',
      stream: '4th Year, APM'
    },{
      pic: 'image/img1.jpg',
      post: 'Treasurer',
      name: 'Anirban Paul',
      stream: '4th Year, CSE'
    },{
      pic: 'image/img1.jpg',
      post: 'Game Secretary',
      name: 'Sayak Das',
      stream: '4th Year, IT'
    },{
      pic: 'image/img1.jpg',
      post: 'Cultural Secretary',
      name: 'Chandrima Sengupta',
      stream: '4th Year, TT'
    }
  ]

  const memcard = UNIONMEMBERS.map((member, index) =>
    <div key={index + 1} className='cards'>
      <img src={member.pic} alt={`Mem ${index + 1}`}/>
      <div id='details'>
        <p id='post'>{member.post}</p>
        <p id='name'>{member.name}</p>
        <p id='stream'>{member.stream}</p>
      </div>
    </div>
  );

  return (
    <div>
      <ImageGallery/>
      <div className='aboutus'>
        <h1>AYASCHAYA</h1>
        <br/>
        <h2>The Annual Tech Fest of GCETTS</h2>
        <br/>
        <h3>Innovate, Compete, Celebrate!</h3>
      </div>
      <Opening/>
      <TextSlider/>
      <div className='union'>
        <h1>Organized under:</h1>
        <h2>GCETTS Student&apos;s Union 2K25</h2>
        <div className='members'>{memcard}</div>
      </div>
      {/* <div className='developers'>This site was developed by [I AM THE VICE SECRETARY BUHAHAHAHAHAHA]</div> */}
      <Developers />
      <ContactForm />

    </div>
   )
 }

export default function AboutPage(){
  return(
    <div>
      {/* <Navbar/> */}
      <About/>
    </div>
  );
}