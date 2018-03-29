import PropTypes from 'prop-types';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CarouselSimple from '../../../components/AdminLTE/Carousel/CarouselSimple';

const Carousel = props => (
  <div>
    <section className="content">
      <div className="row">
        <CarouselSimple data={props.carouselData} />
      </div>
    </section>
  </div>
);

Carousel.defaultProps = {
  carouselData: [],
};

Carousel.propTypes = {
  carouselData: PropTypes.arrayOf(PropTypes.array),
};

export default withTracker(() => {
  const carouselData = [
    {
      title: 'First slide label', desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', imgAlt: '900x500', imgSrc: '/img/ffffff&text=I+Love+Bootstrap-2.png',
    },
    {
      title: 'Second slide label', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imgAlt: '900x500', imgSrc: '/img/ffffff&text=I+Love+Bootstrap-1.png',
    },
    {
      title: 'Third slide label', desc: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.', imgAlt: '900x500', imgSrc: '/img/ffffff&text=I+Love+Bootstrap.png',
    },
  ];
  return {
    carouselData,
  };
})(Carousel);

