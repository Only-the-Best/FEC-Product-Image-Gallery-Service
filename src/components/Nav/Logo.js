import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import TopNav from './TopNav.js';

const Logo = () => (
  <div>
        <Navbar className="navbar">
<Navbar.Header>
  <Navbar.Brand>
    <a href="/">
      <Image id="brand" src="https://s3-us-west-1.amazonaws.com/pwa-staticimg/logo2.png" />
    </a>
  </Navbar.Brand>
</Navbar.Header>
{/* <span id="logo-back-icon"><i className="fas fa-chevron-left"/></span> */}

<TopNav />
</Navbar>
  </div>
  
);

export default Logo;
