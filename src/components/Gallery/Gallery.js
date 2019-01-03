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
import MediaQuery from 'react-responsive';
import throttle from 'lodash.throttle';

const captions = [
  'New Construction: $728,000 (3 beds, 3 baths, 2,542 sqft)',
];

const tempImg = [
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISyzteifczxiqe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/IS2bl2hpv21uqe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/IS2f48pbn8cpf20000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/IS2jz2lqw0tegd1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/IS2v432cx335qe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/IS66wq0mg76gqe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/IS6ear4nh5y0gd1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/IS6m4883w1pjuc1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/IS6msu9ur6spra1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISa17fki1cb2qe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISahnezvza9rqe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISali5828lin8b1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISe4cs5nfw5kgn0000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISecy2jskfedqe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISewx76saknxf20000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISi79r2p5kjzpe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISif3g4xyz8vgn0000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISinpqh24jhoqe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISir8wpovosjf20000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISm20koyesvuf20000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISm6vekdokckgd1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISmi0f1zonmaqe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISq1634a9ph6gd1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISq9o69hjqbvra1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISqdb3lv9srwpe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISql5sm338hsgn0000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISqtr2098rplqe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISqxa88vzw0hf20000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISu4jqyiruswqe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISy3dkq1459ef20000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISyfqirnnyjsra1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISyjdf32e00upe1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/pwa-staticimg/ISyzteifczxiqe1000000000.jpg'
];

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      windowWidth: 0,
      photoIndex: 0,
      direction: null,
      profile: null || tempImg[0],
      index: 0,
      images: null || tempImg.slice(0, 35),
      houseId: 0,
      repeatIcon: <span className="glyphicon glyphicon-repeat" />,
      hideIcon: <span style={{'display':'none'}} />
    };
      this.handleClick = this.handleClick.bind(this);
      this.handleClickImage = this.handleClickImage.bind(this);
      this.getWindowWidth = throttle(this.getWindowWidth.bind(this), 250);
  }

  componentDidMount() {
    let houseNum = 0;
    const houseId = Number(window.location.pathname.replace(/\/browser\//, ''));
    if (houseId && houseId >= 0 && houseId < 30) {
      houseNum = houseId % 30;
    }
    this.setState({
      houseId: houseNum,
      profile: imageUrl[houseNum],
      windowWidth: window.innerWidth,
    });

    window.addEventListener('resize', this.getWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowWidth);
  }

  getWindowWidth() {
        this.setState({windowWidth: window.innerWidth});
  }

  handleClick(selectedIndex, e) {
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
        nextIcon={index === images.length ? repeatIcon : <span className="glyphicon glyphicon-chevron-right" />}
        onSelect={this.handleClick}
      >

          <Carousel.Item>
            <div className="img-container">
              <div className="main-profile">
                <Image
                  id="home-profile-image"
                  src={profile}
                  onClick={e => this.handleClickImage(e, 0)}
                  responsive
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


              {this.state.windowWidth >= 1024 &&
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
              }


            </div>
          </Carousel.Item>

        {this.state.windowWidth <= 1110 &&
          images.map((image, i) => (
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

      {this.state.windowWidth >= 1024 &&
          <Carousel.Item>
                <div className="img-container">
                  <div className="img-side-pictures-container">
                    {
                      images.slice(9).map((image, i) => (
                        <div className="home-children-pictures" key={i}>
                          <img
                            className="gallery-images"
                            alt="house-details"
                            src={image}
                            onClick={e => this.handleClickImage(e, i + 9)}
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
          </Carousel.Item>}

        {this.state.windowWidth >= 1024 && <Carousel.Item>
          <div className="img-container">
            <div className="img-side-pictures-container">
              {
                images.slice(21).map((image, i) => (
                  <div className="home-children-pictures" key={i}>
                    <img
                      className="gallery-images"
                      alt="house-details"
                      src={image}
                      onClick={e => this.handleClickImage(e, i + 21)}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </Carousel.Item>
        }
      </Carousel>
    );
  }
}

const imageUrl = [
  'https://photos.zillowstatic.com/p_f/ISme5cjxotqugu0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISp986ma9jzbea1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISq9c97gb41dud1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISe4wnroe1qm8a0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS9px3krxldnhi1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISus97wkqpe4ot0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IStg0kyfwromkk1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISuoi34e4naf1j0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISql1xrj9dx8k50000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS6qjidjnk8dxo0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS2v4ff6nevv9g0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISi3usy95qqdqc0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS2nuhktq6llxb0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISybb0gl8r936i1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISlquf8vdylevh1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISa1vxex7c1tu80000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISd87r4rts3q281000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISiji66tgs1lbw1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISukz95ns9mghx1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISusxpi9vqzwe40000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISh7diu3aqhcm81000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISu00lq85r9hb50000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS66klce2eagqe0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS66klce2eagqe0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS2fgp23n9k9661000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISa5aw20ky0b470000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISuwccxwrfkfc60000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS2333nxnr2ru91000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISeojf8l3jojc20000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISe0l4as4pez3s1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISeghsyl2z0bzy0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS2zbj2y3ib1rs1000000000.jpg',
  'https://photos.zillowstatic.com/p_/ISyve8cdmzardp1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS9pphpyyndjqh1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISu4r4ro8x2g3e0000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISx7c2buzkdtz01000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISpx2mx5h1f2o30000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISdcuf64q1ywx31000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISxzlokxwldj771000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISu00li27871ed1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/IS2vc1emmbm6fl1000000000.jpg',
  'https://photos.zillowstatic.com/p_f/ISa52agll266js0000000000.jpg',
];
