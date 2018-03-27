import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BlockDescription = props => (
  <div className="description-block border-right">
    <span className={classNames(`description-percentage text-${props.color}`)}><i className={classNames(`fa fa-caret-${props.icon}`)} /> {props.titleValue}%</span>
    <h5 className="description-header">${props.subValue}</h5>
    <span className="description-text">{props.desc}</span>
    { /* /.description-block --> */ }
  </div>
);

BlockDescription.defaultProps = {
  color: 'green',
  icon: 'up',
  titleValue: '',
  subValue: 0,
  desc: '',
};

BlockDescription.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  titleValue: PropTypes.string,
  subValue: PropTypes.number,
  desc: PropTypes.string,
};

export default BlockDescription;
