import React from 'react';

const PropertyInfo = ({ info }) => (

  <div className="propertyInfo-main">
  <div className="breadcrumb-row">
      <ul className="propertyInfo-bar">
        <li>
          <a className="public-View" href="#">
              Public View
          </a>
        </li>
      </ul>
    </div>
    <div className="propertyInfo-bar-right">
      <ul>
        <li>
          <a><span>{info.address}</span></a>
          <a><span>{info.zip}</span></a>
          <a><span>{info.city}</span></a>
          {/*<a><span>{info.State}</span></a>*/}
        </li>
      </ul>
    </div>

  </div>
);

export default PropertyInfo;
