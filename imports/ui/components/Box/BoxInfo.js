import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxInfo = props => (
  <div className="info-box">
    <span className={classNames(`info-box-icon bg-${props.color}`)}><i className={classNames(`fa fa-${props.icon}`)} /></span>

    <div className="info-box-content">
      <span className="info-box-text">{props.title}</span>
      <span className="info-box-number">{props.value}</span>
    </div>
    { /* /.info-box-content */ }
    { /* /.info-box */ }
  </div>
);


BoxInfo.defaultProps = {
  title: '',
  value: '',
  color: 'green',
  icon: 'envelope-o',

};

BoxInfo.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string,
};

export default BoxInfo;
