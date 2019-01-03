import React from 'react';
import { useState, useEffect } from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton, Tooltip, OverlayTrigger
} from 'react-bootstrap';

const tooltipFav = (
  <Tooltip placement="bottom" className="tooltip" id="tooltip-bottom">
  Click here to add a house <br /> to your favorites!
</Tooltip>);

const tooltipMessenger = (
  <Tooltip placement="bottom" className="tooltip" id="tooltip-bottom">
    Click here to go to the messenger. Share your favorites or chat with an agent!
  </Tooltip>
);

const NavToolbar = ({ height, slider, tooltipVisible }) => {
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
        {tooltipVisible && <OverlayTrigger
          placement="top"
          defaultOverlayShown={tooltipVisible}
          overlay={tooltipFav}>
        <span id={save ? 'favorite-active' : 'none'}>
          {!save && <i className="far fa-heart" />}
          {save && <i className="fas fa-heart" />}
        </span>
        </OverlayTrigger>}
        {!tooltipVisible && <OverlayTrigger
          placement="top"
          defaultOverlayShown={false}
          overlay={tooltipFav}>
        <span id={save ? 'favorite-active' : 'none'}>
          {!save && <i className="far fa-heart" />}
          {save && <i className="fas fa-heart" />}
        </span>
        </OverlayTrigger>}
        SAVE
      </NavItem>

      <NavItem
        id='messenger-button'
      >
        {tooltipVisible && <OverlayTrigger
          placement="bottom"
          defaultOverlayShown={tooltipVisible}
          overlay={tooltipMessenger}>
          <i className="fas fa-envelope-square" />
        </OverlayTrigger>}
        {!tooltipVisible && <OverlayTrigger
          placement="bottom"
          defaultOverlayShown={false}
          overlay={tooltipMessenger}>
          <i className="fas fa-envelope-square" />
        </OverlayTrigger>}
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
