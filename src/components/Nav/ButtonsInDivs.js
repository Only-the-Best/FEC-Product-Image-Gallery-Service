import React from 'react'
import { useState, useEffect } from 'react'

const NavBarPart2 = ({ height, slider }) => {
  const [save, saveFav] = useState(true);

  return (
    <div id="browser-navbarDIV_1">
      <div id="browser-navbarDIV_2">
        <div id="browser-navbarDIV_3">
          <nav id="browser-navbarNAV_4">
            <div id="browser-navbarDIV_5">
              <span id="browser-navbarSPAN_6">&lt;</span><span id="browser-navbarSPAN_7">Back</span>
            </div>
          </nav>
        </div>
        <div id="browser-navbarDIV_8">
          <div id="browser-navbarDIV_9">
            <div id="browser-navbarDIV_10">
              <ul id="browser-navbarUL_11">
                <li id="browser-navbarLI_12">
                  <a href="#contact-lightbox" id="browser-navbarA_13"><span
                    id="browser-navbarSPAN_14">Contact <span id="browser-navbarSPAN_15">agent</span></span></a>
                </li>
                <li id="browser-navbarLI_16">
                  <span id="browser-navbarSPAN_17"><span id="browser-navbarSPAN_18"></span> <span
                    id="browser-navbarSPAN_19">Save</span></span>
                </li>
                <li id="browser-navbarLI_20">
                  <span id="browser-navbarSPAN_21"><span id="browser-navbarSPAN_22"><span
                    id="browser-navbarSPAN_23"></span> Share</span></span>
                </li>
                <li id="browser-navbarLI_24">
                  <div id="browser-navbarDIV_25">
                    <div id="browser-navbarDIV_26">
                      <span id="browser-navbarSPAN_27">More<span id="browser-navbarSPAN_28"></span></span>
                    </div>
                    <div id="browser-navbarDIV_29">
                    </div>
                  </div>
                </li>
              </ul>
              <ul id="browser-navbarUL_30">
                <li id="browser-navbarLI_31">
                  <div id="browser-navbarDIV_32">
                    <form method="get" action="/search/RealEstateSearch.htm"
                          id="browser-navbarFORM_33">
                      <label htmlFor="citystatezip" id="browser-navbarLABEL_34">
                        Search
                      </label>
                      <input id="browser-navbarINPUT_35" name="citystatezip"
                             placeholder="City, State, or ZIP" type="text"/>
                      <div id="browser-navbarDIV_36">
                        <button type="submit" id="browser-navbarBUTTON_37">
                          <i id="browser-navbarI_38"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="browser-navbarDIV_39">
      </div>
    </div>
  )
};

export default NavBarPart2



