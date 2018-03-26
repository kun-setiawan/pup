import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxLoading = props => (
  <div className={classNames(`box ${props.style} box-solid`)}>
    <div className="box-header">
      <h3 className="box-title">{props.title}</h3>
    </div>
    <div className="box-body">
      {props.desc}
    </div>
    { /* /.box-body */ }
    { /* Loading (remove the following to stop the loading) */ }
    <div className="overlay">
      <i className="fa fa-refresh fa-spin" />
    </div>
    { /* end loading */ }
    { /* /.box */ }
  </div>
);

BoxLoading.defaultProps = {
  style: 'box-default',
};

BoxLoading.propTypes = {
  style: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default BoxLoading;
