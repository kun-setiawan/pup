import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxInfoRemovable = props => (
  <div className={classNames(`box ${props.style}`)}>
    <div className="box-header with-border">
      <h3 className="box-title">{props.title}</h3>

      <div className="box-tools pull-right">
        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
      </div>
      { /* /.box-tools */ }
    </div>
    { /* /.box-header */ }
    <div className="box-body">
      {props.desc}
    </div>
    { /* /.box-body */ }
    { /* /.box */ }
  </div>
);

BoxInfoRemovable.defaultProps = {
  style: 'box-default',
};

BoxInfoRemovable.propTypes = {
  style: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default BoxInfoRemovable;
