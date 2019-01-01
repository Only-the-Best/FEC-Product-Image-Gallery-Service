import React from 'react';
import { Carousel } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import { useState, useEffect } from 'react';

const captions = [
  'New Construction: $3,328,000 (4 beds, 4 baths, 4,142 sqft)',
];

const tempImg = [
  'https://photos.zillowstatic.com/p_f/ISu4fv7a19c25h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISesa77xssv75h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS6m8voqokna5h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISyf6j6kkcfd5h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISq947odg47g5h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISi32v57cwyi5h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISaxzin08oql5h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS2rx65u3gio5h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISukvumnz7ar5h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISmeti4hvz1u5h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISe8r6marrtw5h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS62pu34njlz5h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISyvmilxibd26h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISqpk63re3556h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISijiukkavw76h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISadgi2e6noa6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS27e6k72fgd6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISu0cu11y68g6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISmu9ijutyzi6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISeo761opqrl6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS6i5uihlijo6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISyb3i0bhabr6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISqpk63re3556h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISijiukkavw76h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISadgi2e6noa6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS27e6k72fgd6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISu0cu11y68g6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISmu9ijutyzi6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISeo761opqrl6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS6i5uihlijo6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISyb3i0bhabr6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISadgi2e6noa6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS27e6k72fgd6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISu0cu11y68g6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISmu9ijutyzi6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISeo761opqrl6h0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS6i5uihlijo6h0000000000.jpg',
]

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      photoIndex: 0,
      direction: null,
      profile: null || tempImg[0],
      index: 0,
      images: null || tempImg.slice(0, 35),
      repeatIcon: <span className="glyphicon glyphicon-repeat" />,
      hideIcon: <span style={{'display':'none'}} />
    };
  }

  handleClick(selectedIndex, e) {
    console.log('index is', selectedIndex)
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  handleClickImage(e, photoIndex) {
    e && e.preventDefault();
    this.setState({
      isOpen: true,
      photoIndex,
    });
  }

  render() {
    const {
      isOpen, index, images, profile, photoIndex, repeatIcon, hideIcon
    } = this.state;
    return (
      <Carousel
        interval={null}
        indicators={false}
        activeIndex={index}
        prevIcon={index === 0 ? hideIcon: <span className="glyphicon glyphicon-chevron-left"/>}
        nextIcon={index === 2 ? repeatIcon : <span className="glyphicon glyphicon-chevron-right" />}
        onSelect={this.handleClick.bind(this)}
      >
        <Carousel.Item>
          <Image src={profile} responsive/>
        </Carousel.Item>
      </Carousel>
        
      
    );
  }
}
