import React from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { withTracker } from 'meteor/react-meteor-data';

const CarouselSimple = () => (
  <Carousel>
    <Carousel.Item>
      <img alt="900x500" src="/img/ffffff&text=I+Love+Bootstrap-2.png" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img alt="900x500" src="/img/ffffff&text=I+Love+Bootstrap-1.png" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img alt="900x500" src="/img/ffffff&text=I+Love+Bootstrap.png" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

// CarouselSimple.defaultProps = {
//     title: '',
//     description: '',
//
// };
//
// CarouselSimple.propTypes = {
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
// };

export default CarouselSimple;
