import React from 'react';

const BoxInfoRemovable = () => (
  <div className="box box-success">
    <div className="box-header with-border">
      <h3 className="box-title">Removable</h3>

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
};

export default BoxInfoRemovable;
