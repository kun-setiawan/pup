import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Alert = props => (
  <div className={classNames(`alert alert-${props.style} alert-dismissible`)}>
    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
    <h4><i className={classNames(`icon fa ${props.icon}`)} /> {props.title}</h4>
    {props.desc}
  </div>
);

Alert.defaultProps = {
  style: 'alert-danger',
  icon: 'fa-ban',
};

Alert.propTypes = {
  style: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Alert;
