import React from 'react';
import axios from 'axios';
import NavToolbar from './components/Nav/NavToolbar.js';
import Gallery from './components/Gallery/Gallery.js';
import PropertyInfo from './components/Nav/PropertyInfo.js';
import Logo from './components/Nav/Logo.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propInfo: [],
      height: false,
      slider: 'nav-toolbar-list',
    };
    this.updateWindowHeight = this.updateWindowHeight.bind(this);
  }

  componentDidMount() {
    let imageId = Number(window.location.pathname.replace(/\//, ''));
    imageId %= 100;
    if (imageId >= 0 && imageId <= 100) {
      axios.get(`/homes/${imageId}`).then((result) => {
        this.setState({
          propInfo: result.data,
        });
      });
    }
    this.updateWindowHeight();
  }

  updateWindowHeight() {
    window.onscroll = () => {
      if (window.scrollY >= 50) {
        this.setState({
          height: true,
          slider: 'nav-toolbar-list-Slide-left',
        });
      } else if (window.scrollY > 0 || window.scrollY < 50) {
        this.setState({
          height: false,
          slider: 'nav-toolbar-list-Slide-right',
        });
      }
    };
  }

  render() {
    const { height, slider, propInfo } = this.state;
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
  }
}
