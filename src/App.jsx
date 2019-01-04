import React from 'react';
import NavToolbar from './components/Nav/NavToolbar.js';
import Gallery from './components/Gallery/Gallery.js';
import PropertyInfo from './components/Nav/PropertyInfo.js';
import Logo from './components/Nav/Logo.js';
import { useState, useEffect } from 'react';
import houseData from '../../datas.js';

const App = () => {
  const [propInfo, setPropInfo] = useState(
    houseData
  );
  const [height, setHeight] = useState(false);
  const [slider, setSlider] = useState('nav-toolbar-list');
  const [tooltipVisible, setTooltipVisible] = useState(true);

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
    let imageId = Number(window.location.pathname.replace(/\/browser\//, '')) || 0;

    setPropInfo(propInfo.houseData[imageId])
    updateWindowHeight();

    if (!localStorage.getItem('first-visit-browse-homes')) {
      localStorage.setItem('first-visit-browse-homes', 'true');
      setTimeout(() => setTooltipVisible(false), 15000)
    } else {
      setTooltipVisible(false);
    }
  },[]);

  return (
    <div className="main-wrapper">
      <Logo />
      <NavToolbar height={height} slider={slider} tooltipVisible={tooltipVisible}/>
      <PropertyInfo info={propInfo} />
      <Gallery />
    </div>
  );
};

export default App;
