"use client"

import React from 'react';
import ContactForm from '../../components/ContactForm';
import Developers from '../../components/Developers';
import Image from 'next/image';

function ImageGallery() {
  const GALLERY = [
    'AboutPageImages/Img1.jpeg',
    'AboutPageImages/Img2.jpeg',
    'AboutPageImages/Img3.jpeg',
    'AboutPageImages/Img4.jpeg',
    'AboutPageImages/Img5.jpeg',
    'AboutPageImages/Img6.jpeg',
    'AboutPageImages/Img7.jpeg',
    'AboutPageImages/Img8.jpeg',
    'AboutPageImages/Img9.jpeg',
    'AboutPageImages/Img10.jpeg',
    'AboutPageImages/Img11.jpeg',
    'AboutPageImages/Img12.jpeg',
    'AboutPageImages/Img13.jpeg',
    'AboutPageImages/Img14.jpeg',
    'AboutPageImages/Img15.jpeg',
    'AboutPageImages/Img16.jpeg',
    'AboutPageImages/Img17.jpeg',
    'AboutPageImages/Img18.jpeg',
    'AboutPageImages/Img19.jpeg',
    'AboutPageImages/Img20.jpeg',
  ];


  const Imggallery = GALLERY.map((image, index) =>
    <Image src={image} width={400} height={270} key={index} alt={`Img${index}`} />
  );

  return (
    <div className='masoncontainer'>
      <div className='masonry'>{Imggallery}</div>
    </div>
  );
}

function Opening() {
  const para = <p id='bigpara'>Welcome to AYASCHAYA, the pinnacle of innovation and tradition here at GCETTS. Celebrating years of excellence
    <span id='dots'>...</span>
    <span id='more'>, the Tech Fest has become a hallmark of our legacy, bringing together the brightest minds, fostering collaboration and creativity. Join us for a day of excitement, learning, and unforgettable memories!</span></p>

  function ReadMore() {
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

  return (
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
        <Image src='image/lololol.jpeg' width={230} height={420} alt='poster' />
      </div>
    </div>
  );
}

function TextSlider() {
  const GAMELIST = ["LUDO", "Carrom", "Free Fire", "BGMI", "FIFA", "PES", "Arm Wrestling", "Decode", "Aptitude", "Tech Quiz", "Memory Game", "Debate", "Rubik's Cube", "Treasure Hunt", "Musical Chair", "Ball-in-Bucket", "Pass the Ball"];

  const slidertext = GAMELIST.map((game, index) =>
    <div key={index + 1} id='gamecard'>{game}</div>
  );

  const lotsahyphens = GAMELIST.map((game, index) =>
    <div id='hyphen' key={index}></div>
  );

  return (
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

function About() {
  const UNIONMEMBERS = [{
    pic: '/LndingPageImages/Img3.JPG',
    post: 'General Secretary',
    name: 'Anal Chakrabarty',
    stream: '4th Year, APM'
  }, {
    pic: '/LndingPageImages/Img7.JPG',
    post: 'Treasurer',
    name: 'Anirban Paul',
    stream: '4th Year, CSE'
  }, {
    pic: '/LndingPageImages/Img7.JPG',
    post: 'Game Secretary',
    name: 'Sayak Das',
    stream: '4th Year, IT'
  }, {
    pic: '/LndingPageImages/Img3.JPG',
    post: 'Cultural Secretary',
    name: 'Chandrima Sengupta',
    stream: '4th Year, TT'
  }
  ]

  const memcard = UNIONMEMBERS.map((member, index) =>
    <div key={index + 1} className='cards'>
      <Image src={member.pic} width={200} height={250} alt={`Mem ${index + 1}`} />
      <div id='details'>
        <p id='post'>{member.post}</p>
        <p id='name'>{member.name}</p>
        <p id='stream'>{member.stream}</p>
      </div>
    </div>
  );

  const ulogo = 'Union Logo.svg'

  return (
    <div>
      <ImageGallery />
      <div className='aboutus'>
        <h1>AYASCHAYA</h1>
        <br />
        <h2>The Annual Tech Fest of GCETTS</h2>
        <br />
        <h3>Innovate, Compete, Celebrate!</h3>
      </div>
      <Opening />
      <TextSlider />
      <div className='union'>
        <h1>Organized under:</h1>
        <div className="union2">
          <Image src={ulogo} className='ulog' alt='union logo' width={100} height={100} />
          <h2>GCETTS Student&apos;s Union 2K25</h2>
        </div>
        <div className='members'>{memcard}</div>
      </div>
      {/* <div className='developers'>This site was developed by [I AM THE VICE SECRETARY BUHAHAHAHAHAHA]</div> */}
      <Developers />
      <ContactForm />

    </div>
  )
}

export default function AboutPage() {
  return (
    <div>
      {/* <Navbar/> */}
      <About />
    </div>
  );
}