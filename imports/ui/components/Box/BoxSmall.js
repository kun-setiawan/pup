import React from 'react';
import PropTypes from 'prop-types';

import './BoxSmall.scss';


const BoxSmall = ({
  number, sign, text, icon, color, url,
}) => (
  <div className="col-lg-3 col-xs-6">
    <div className={`small-box bg-${color}`}>
      <div className="inner">
        <h3>
          {number}
          <sup style={{ fontSize: 20 }}>{sign}</sup>
        </h3>
        <p>{text}</p>
      </div>
      <div className="icon">
        <i className={`ion ${icon}`} />
      </div>
      <a href={url} className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right" />
      </a>
    </div>
  </div>
);

BoxSmall.defaultProps = {
  number: 150,
  sign: '',
  text: 'New Orders',
  icon: 'ion-bag',
  color: 'aqua',
  url: '/new-orders',
};

BoxSmall.propTypes = {
  number: PropTypes.number.isRequired,
  sign: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default BoxSmall;
