import React from 'react';
import PropTypes from 'prop-types';

const BoxInfo = props => (
  <div className={`info-box ${props.boxClassStyle}`}>
    <span className={`info-box-icon ${props.iconBoxClass}`}><i className={props.iconClass} /></span>

    <div className="info-box-content">
      <span className="info-box-text">{props.title}</span>
      <span className="info-box-number">{props.desc}</span>

      {props.progress && props.progress.value ?
        <div>
          <div className="progress">
            <div className="progress-bar" style={{ width: `${props.progress.value}%` }} />
          </div>
          <span className="progress-description">
            {props.progress.value}% Increase in {props.progress.limit}
          </span>
        </div> : '' }
      { /* /.info-box-content */ }
    </div>
    { /* /.info-box */ }
  </div>
);

BoxInfo.defaultProps = {
  boxClassStyle: '',
  iconBoxClass: '',
  iconClass: '',
  title: '',
  desc: '',
  progress: {
    value: '',
    limit: '',
  },
};

BoxInfo.propTypes = {
  boxClassStyle: PropTypes.string,
  iconBoxClass: PropTypes.string,
  iconClass: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  progress: PropTypes.object,
};

export default BoxInfo;

