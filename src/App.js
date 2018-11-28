import React from 'react';
import NavToolbar from './components/Nav/NavToolbar.js';
import Gallery from '../src/components/Gallery/Gallery.js';
import PropertyInfo from '../src/components/Nav/PropertyInfo.js';
import Logo from '../src/components/Nav/Logo.js'
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      propInfo: [],
      height: false,
      slider:'nav-toolbar-list'
    }
    this.updateWindowHeight = this.updateWindowHeight.bind(this);
  }
  
  componentDidMount() {
    
    let imageId = Number(window.location.pathname.replace(/\/browser\//, ''));
    imageId = imageId || 0;
    if (imageId >= 0 && imageId <= 100) {
      axios.get(`http://img-gallery.us-west-1.elasticbeanstalk.com/homes/${imageId}`)
      .then(result => {
        this.setState({
          propInfo: result.data 
        })
      })
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    this.updateWindowHeight();
  }

  updateWindowHeight() {
    window.onscroll = () => {
      if (window.scrollY >= 50) {
        this.setState({
          height: true,
          slider: 'nav-toolbar-list-Slide-left'
        })
      } else if (window.scrollY > 0 || window.scrollY < 50) {
       this.setState({
         height: false,
         slider: 'nav-toolbar-list-Slide-right'
       })
      }
    }
  }

  render(){
    const {height, slider, propInfo} = this.state;
    return (
      <div>
        {propInfo.length && 
        <div className="main-wrapper">
          <Logo />
          <NavToolbar height={height} slider={slider} />
          <PropertyInfo info={propInfo[0]} />
          <Gallery img={propInfo[0].imageUrl}/> 
        </div>
      }
      {!propInfo.length && <div id="loading-page">Loading...</div> }    
      </div>
    )
  }
};
