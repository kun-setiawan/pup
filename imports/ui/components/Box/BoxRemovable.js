import React from 'react';
import PropTypes from 'prop-types';

const BoxInfoRemovable = ({ emailAddress }) => (
  <div className="box box-success">
    <div className="box-header with-border">
      <h3 className="box-title">Removable{emailAddress}</h3>

      <div className="box-tools pull-right">
        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
      </div>
      { /* /.box-tools */ }
    </div>
    { /* /.box-header */ }
    <div className="box-body">
            The body of the box
    </div>
    { /* /.box-body */ }
    { /* /.box */ }
  </div>
);

BoxInfoRemovable.defaultProps = {
};

BoxInfoRemovable.propTypes = {
  emailAddress: PropTypes.string.isRequired,
};

export default BoxInfoRemovable;
