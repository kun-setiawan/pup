import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxInfoCollapsable = props => (
  <div className={classNames(`box ${props.style} collapsed-box box-solid`)}>
    <div className="box-header with-border">
      <h3 className="box-title">{props.title}</h3>

      <div className="box-tools pull-right">
        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus" />
        </button>
        { /* /.box-tools */ }
      </div>
    </div>
    { /* /.box-header */ }
    <div className="box-body">
      {props.desc}
    </div>
    { /* /.box-body */ }
    { /* /.box */ }
  </div>
);

BoxInfoCollapsable.defaultProps = {
  style: 'box-default',
};

BoxInfoCollapsable.propTypes = {
  style: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default BoxInfoCollapsable;
