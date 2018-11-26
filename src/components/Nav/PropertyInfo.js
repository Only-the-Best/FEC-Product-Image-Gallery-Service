import React from 'react';

const PropertyInfo = ({ info }) => (
  <div className="propertyInfo-main">
    <ul className="propertyInfo-bar">
      <li>
        <a className="public-View" href="#">
            Public View
        </a>
        <a><span>{info.address}</span></a>
        <a><span>{info.zipcode.slice(0, 5)}</span></a>
        <a><span>{info.city}</span></a>
        <a><span>{info.State}</span></a>
      </li>
    </ul>
  </div>
);

export default PropertyInfo;
