import React from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CarouselSimple = props => (
  <Carousel>
    {props.data.map(item => (
      <Carousel.Item>
        <img alt={item.imgAlt} src={item.imgSrc} />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
  </Carousel>
);

CarouselSimple.defaultProps = {
  data: [],

};

CarouselSimple.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CarouselSimple;
