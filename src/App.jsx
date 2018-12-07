import React from 'react';
import axios from 'axios';
import NavToolbar from './components/Nav/NavToolbar.js';
import Gallery from './components/Gallery/Gallery.js';
import PropertyInfo from './components/Nav/PropertyInfo.js';
import Logo from './components/Nav/Logo.js';
import { useState, useEffect } from 'react';

const App = () => {
  const [propInfo, setPropInfo] = useState([]);
  const [height, setHeight] = useState(false);
  const [slider, setSlider] = useState('nav-toolbar-list');

  const updateWindowHeight = () => {
      window.onscroll = () => {
        if (window.scrollY >= 50) {
          setHeight(true);
          setSlider('nav-toolbar-list-Slide-left');
        } else if (window.scrollY > 0 || window.scrollY < 50) {
          setHeight(true);
          setSlider('nav-toolbar-list-Slide-right');
        }
      };
    };

  useEffect(() => {
    let imageId = Number(window.location.pathname.replace(/\//, ''));
    imageId %= 100;
    if (imageId >= 0 && imageId <= 100) {
      axios.get(`/homes/${imageId}`).then((result) => {
        setPropInfo(result.data);
      });
    }
    updateWindowHeight();
  },[]);

  if (propInfo.length) {
    return (
      <div className="main-wrapper">
        <Logo />
        <NavToolbar height={height} slider={slider} />
        <PropertyInfo info={propInfo[0]} />
        <Gallery img={propInfo[0].imageUrl} />
      </div>
    );
  }
  return (
    <div id="loading-page">Loading...</div>
  );
};

export default App;
