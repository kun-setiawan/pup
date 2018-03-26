import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Alert = props => (
  <div className={classNames(`callout callout-${props.style}`)}>
    <h4>{props.title}</h4>
    <p>{props.desc}</p>
  </div>
);

Alert.defaultProps = {
  style: 'alert-danger',
};

Alert.propTypes = {
  style: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Alert;
