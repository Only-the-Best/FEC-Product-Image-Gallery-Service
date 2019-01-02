import React from 'react';
import NavToolbar from './components/Nav/NavToolbar.js';
import Gallery from './components/Gallery/Gallery.js';
import PropertyInfo from './components/Nav/PropertyInfo.js';
import Logo from './components/Nav/Logo.js';
import { useState, useEffect } from 'react';

const App = () => {
  const [propInfo, setPropInfo] = useState([
    {
      id: 0,
      address: '5656 Thiel Highway',
      zipcode: '26591',
      city: 'Lilyanton',
      State: 'Florida'
    }
  ]);
  const [height, setHeight] = useState(false);
  const [slider, setSlider] = useState('nav-toolbar-list');

  const updateWindowHeight = () => {
      window.onscroll = () => {
        if (window.scrollY >= 50) {
          setHeight(true);
          setSlider('nav-toolbar-list-Slide-left');
        } else if (window.scrollY > 0 || window.scrollY < 50) {
          setHeight(false);
          setSlider('nav-toolbar-list-Slide-right');
        }
      };
    };

  useEffect(() => {
    let imageId = Number(window.location.pathname.replace(/\//, ''));
    updateWindowHeight();
  },[]);

  return (
    <div className="main-wrapper">
      <Logo />
      <NavToolbar height={height} slider={slider} />
      <PropertyInfo info={propInfo[0]} />
      <Gallery />
    </div>
  );
};

export default App;
