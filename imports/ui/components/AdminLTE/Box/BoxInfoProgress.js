import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxInfoProgress = props => (
  <div className={classNames(`info-box bg-${props.color}`)}>
    <span className="info-box-icon"><i className={classNames(`fa fa-${props.icon}`)} /></span>

    <div className="info-box-content">
      <span className="info-box-text">{props.title}</span>
      <span className="info-box-number">{props.value}</span>

      <div className="progress">
        <div className="progress-bar" style={{ width: `${props.progress}%` }} />
      </div>
      <span className="progress-description">
        {props.progress}% Increase in {props.limit}
      </span>
      { /* /.info-box-content */ }
    </div>
    { /* /.info-box */ }
  </div>
);

BoxInfoProgress.defaultProps = {
  title: '',
  value: 0,
  color: 'green',
  icon: 'fa-bookmark-o',
  progress: 0,
  limit: '',
};

BoxInfoProgress.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string,
  progress: PropTypes.number,
  limit: PropTypes.string,
};

export default BoxInfoProgress;

