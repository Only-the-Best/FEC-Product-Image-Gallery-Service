import React from 'react';
import { useState, useEffect } from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton,
} from 'react-bootstrap';

const NavToolbar = ({ height, slider }) => {
  const [save, saveFavorite] = useState(false);

  return (
  <Navbar id="nav-toolbar" className="nav-toolbar-class" fixedTop={height}>
    <Nav id={slider}>
      <NavItem id={height ? 'navItem-contact-highlight' : 'navItem-contact'}>
        <div id='chat-agent'>
        <i className="far fa-comment"/>
        CONTACT AGENT
        </div>
      </NavItem>
      <NavItem
        id='add-favorites'
        onClick={() => saveFavorite(!save)}>
        <span id={save ? 'favorite-active' : 'none'}>
          {!save && <i className="far fa-heart" />}
          {save && <i className="fas fa-heart" />}
        </span>
        SAVE
      </NavItem>
      <NavItem
        id='messenger-button'
      >
        <i className="fas fa-envelope-square" />
        SHARE
      </NavItem>
      <NavDropdown title="MORE" id="SubNav-dropdowns">
        <MenuItem>Print</MenuItem>
        <MenuItem>Get New Listings In Email</MenuItem>
        <MenuItem divider />
        <MenuItem>Edit listing, photo, and price</MenuItem>
        <MenuItem>Claim this listing</MenuItem>
        <MenuItem>Report problem with listing</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
  )
};

export default NavToolbar;
