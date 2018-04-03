import React from 'react';
import PropTypes from 'prop-types';

const BoxSmall = props => (
  <div className={`small-box ${props.boxClassStyle}`}>
    { /* small box */ }
    <div className="inner">
      <h3>{props.title}</h3>

      <p>{props.desc}</p>
    </div>
    <div className="icon">
      <i className={props.iconClass} />
    </div>
    <a href={props.link.url} className="small-box-footer">
            More info <i className={props.link.iconClass} />
    </a>
  </div>
);

BoxSmall.defaultProps = {
  boxClassStyle: '',
  title: '',
  desc: '',
  iconClass: '',
  link: {
    url: '',
    iconClass: '',
  },
};

BoxSmall.propTypes = {
  boxClassStyle: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  iconClass: PropTypes.string,
  link: PropTypes.object,
};

export default BoxSmall;
