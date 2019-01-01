// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import Lightbox from 'react-image-lightbox';
// import { useState, useEffect } from 'react';

// const captions = [
//   'New Construction: $3,328,000 (4 beds, 4 baths, 4,142 sqft)',
// ];

// const tempImg = [
//   'https://photos.zillowstatic.com/p_f/ISu4fv7a19c25h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISesa77xssv75h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/IS6m8voqokna5h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISyf6j6kkcfd5h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISq947odg47g5h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISi32v57cwyi5h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISaxzin08oql5h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/IS2rx65u3gio5h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISukvumnz7ar5h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISmeti4hvz1u5h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISe8r6marrtw5h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/IS62pu34njlz5h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISyvmilxibd26h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISqpk63re3556h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISijiukkavw76h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISadgi2e6noa6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/IS27e6k72fgd6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISu0cu11y68g6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISmu9ijutyzi6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISeo761opqrl6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/IS6i5uihlijo6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISyb3i0bhabr6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISqpk63re3556h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISijiukkavw76h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISadgi2e6noa6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/IS27e6k72fgd6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISu0cu11y68g6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISmu9ijutyzi6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISeo761opqrl6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/IS6i5uihlijo6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISyb3i0bhabr6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISadgi2e6noa6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/IS27e6k72fgd6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISu0cu11y68g6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISmu9ijutyzi6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/ISeo761opqrl6h0000000000.jpg',
//   'https://photos.zillowstatic.com/p_f/IS6i5uihlijo6h0000000000.jpg',
// ]

// export default class Gallery extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//       photoIndex: 0,
//       direction: null,
//       profile: null || tempImg[0],
//       index: 0,
//       images: null || tempImg.slice(0, 35),
//       repeatIcon: <span className="glyphicon glyphicon-repeat" />,
//       hideIcon: <span style={{'display':'none'}} />
//     };
//   }

//   handleClick(selectedIndex, e) {
//     console.log('index is', selectedIndex)
//     this.setState({
//       index: selectedIndex,
//       direction: e.direction,
//     });
//   }

//   handleClickImage(e, photoIndex) {
//     e && e.preventDefault();
//     this.setState({
//       isOpen: true,
//       photoIndex,
//     });
//   }

//   render() {
//     const {
//       isOpen, index, images, profile, photoIndex, repeatIcon, hideIcon
//     } = this.state;
//     return (
//       <Carousel
//         interval={null}
//         indicators={false}
//         activeIndex={index}
//         prevIcon={index === 0 ? hideIcon: <span className="glyphicon glyphicon-chevron-left"/>}
//         nextIcon={index === 2 ? repeatIcon : <span className="glyphicon glyphicon-chevron-right" />}
//         onSelect={this.handleClick.bind(this)}
//       >
//         <Carousel.Item>
//           <div className="img-container">
//             <div className="main-profile">
//               <img
//                 className="home-profile-image"
//                 alt="house-profile"
//                 src={profile}
//                 onClick={e => this.handleClickImage(e, 0)}
//               />
//               {
//                 isOpen
//                 && (
//                 <Lightbox
//                   mainSrc={photoIndex === 0 ? profile : images[photoIndex]}
//                   nextSrc={images[(photoIndex + images.length + 1) % images.length]}
//                   prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//                   onMovePrevRequest={() => this.setState({
//                     photoIndex: (photoIndex + images.length - 1) % images.length,
//                   })}
//                   onMoveNextRequest={() => this.setState({
//                     photoIndex: (photoIndex + images.length + 1) % images.length,
//                   })}
//                   onCloseRequest={() => this.setState({ isOpen: false })}
//                   imageTitle={`${photoIndex + 1} of ${images.length}`}
//                   imageCaption={captions[0]}
//                 />
//                 )
//               }
//             </div>
//             <div className="img-side-pictures-container">
//               {
//                 images.slice(1).map((image, i) => (
//                   <div className="home-children-pictures" key={i}>
//                     <img
//                       className="gallery-images"
//                       alt="house-details"
//                       src={image}
//                       onClick={e => this.handleClickImage(e, i + 1)}
//                     />
//                   </div>
//                 ))
//               }
//             </div>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="img-container">
//             <div className="img-side-pictures-container">
//               {
//                 images.slice(9).map((image, i) => (
//                   <div className="home-children-pictures" key={i}>
//                     <img
//                       className="gallery-images"
//                       alt="house-details"
//                       src={image}
//                       onClick={e => this.handleClickImage(e, i + 9)}
//                     />
//                   </div>
//                 ))
//               }
//             </div>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="img-container">
//             <div className="img-side-pictures-container">
//               {
//                 images.slice(21).map((image, i) => (
//                   <div className="home-children-pictures" key={i}>
//                     <img
//                       className="gallery-images"
//                       alt="house-details"
//                       src={image}
//                       onClick={e => this.handleClickImage(e, i + 21)}
//                     />
//                   </div>
//                 ))
//               }
//             </div>
//           </div>
//         </Carousel.Item>
//       </Carousel>
      
//     );
//   }
// }


import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
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
        nextIcon={index === images.length - 1 ? repeatIcon : <span className="glyphicon glyphicon-chevron-right" />}
        onSelect={this.handleClick.bind(this)}
      >

          <Carousel.Item>
            <div className="img-container">
              <div className="main-profile">
                <Image src={profile} responsive 
                  onClick={e => this.handleClickImage(e, 0)}
                    />
                    {
                      isOpen
                      && (
                      <Lightbox
                        mainSrc={photoIndex === 0 ? profile : images[photoIndex]}
                        nextSrc={images[(photoIndex + images.length + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onMovePrevRequest={() => this.setState({
                          photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                          photoIndex: (photoIndex + images.length + 1) % images.length,
                        })}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        imageTitle={`${photoIndex + 1} of ${images.length}`}
                        imageCaption={captions[0]}
                      />
                      )
                    }
              </div>
              <div className="img-side-pictures-container">
                {
                  images.slice(1).map((image, i) => (
                    <div className="home-children-pictures" key={i}>
                      <img
                        className="gallery-images"
                        alt="house-details"
                        src={image}
                        onClick={e => this.handleClickImage(e, i + 1)}
                      />
                    </div>
                  ))
                }
              </div>
              </div>
            
              </Carousel.Item>
          {
            images.slice(1).map((image, i) => (
              <Carousel.Item key={i}>
              <div>
                <Image 
                  src={image} 
                  onClick={e => this.handleClickImage(e, i + 1)}
                  responsive 
                />
              </div>                
              </Carousel.Item>
              
            ))
          }
        
        
      </Carousel>
        
      
    );
  }
}

