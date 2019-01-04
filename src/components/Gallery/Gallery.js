import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import throttle from 'lodash.throttle';
import { imgUrls, imgPreviews, profileImgs } from './imagesStorage.js'

const captions = [
  'New Construction: $728,000 (3 beds, 3 baths, 2,542 sqft)',
];

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      windowWidth: 0,
      photoIndex: 0,
      direction: null,
      index: 0,
      images: imgUrls,
      imagesPreview: imgPreviews,
      houseId: 0,
      repeatIcon: <span className="glyphicon glyphicon-repeat" />,
      hideIcon: <span style={{'display':'none'}} />,
      rightIcon: <span className="glyphicon glyphicon-chevron-right" />,
      leftIcon: <span className="glyphicon glyphicon-chevron-left"/>,
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
      windowWidth: window.innerWidth,
      images: [profileImgs[houseNum], ...this.state.images],
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
      isOpen, index, images, profile, photoIndex, repeatIcon, hideIcon, imagesPreview, windowWidth, rightIcon, leftIcon
    } = this.state;
    return (

      <Carousel
        interval={null}
        indicators={false}
        activeIndex={index}
        prevIcon={index === 0 ? hideIcon: leftIcon}
        nextIcon={
          (windowWidth <= 1024 && index === images.length - 1) || (windowWidth >= 1024 && index === 2) ?
          repeatIcon : rightIcon
        }
        onSelect={this.handleClick}
      >

        <Carousel.Item>
          <div className="img-container">
            <div className="main-profile">
              <Image
                id="home-profile-image"
                src={images[0]}
                alt="home-profile-image"
                onClick={e => this.handleClickImage(e, 0)}                
                responsive
              />

            </div>
            {
              isOpen
              && (
                <Lightbox
                  mainSrc={images[photoIndex]}
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

            {
              windowWidth >= 1024 &&
              <div className="img-side-pictures-container">
                {
                  imagesPreview.map((image, i) => (
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

        {/*If browser width is less than 1024 px then render Mobile Version*/}
        {
          windowWidth <= 1024 &&
          imagesPreview.map((image, i) => (
            <Carousel.Item key={i}>
                <div>
                  <Image
                    src={image}
                    alt="home-details"
                    onClick={e => this.handleClickImage(e, i + 1)}
                    responsive
                  />
                </div>
            </Carousel.Item>
          ))
        }

      {
        windowWidth >= 1024 &&
          <Carousel.Item>
                <div className="img-container">
                  <div className="img-side-pictures-container">
                    {
                      imagesPreview.slice(8).map((image, i) => (
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
          </Carousel.Item>
        }
        {
          windowWidth >= 1024 &&
          <Carousel.Item>
            <div className="img-container">
              <div className="img-side-pictures-container">
                {
                  imagesPreview.slice(20).map((image, i) => (
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
