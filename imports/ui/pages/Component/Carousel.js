import PropTypes from 'prop-types';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CarouselSimple from '../../components/Carousel/CarouselSimple';

const Carousel = () => (
    <div>
        <section className="content">
            <div className="row">
                <CarouselSimple/>
            </div>
        </section>
    </div>
);

Carousel.defaultProps = {
};

Carousel.propTypes = {
    carouselData: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default withTracker(() => {
    const carouselData = [
        {"title": "First Slide"},
        {"title": "Second Slide"},
        {"title": "Third Slide"},
    ];
    return {
        carouselData,
    };
})(Carousel);

