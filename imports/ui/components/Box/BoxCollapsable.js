import React from 'react';

const BoxInfoRemovable = () => (
  <div className="box box-default collapsed-box">
    <div className="box-header with-border">
      <h3 className="box-title">Expandable</h3>

      <div className="box-tools pull-right">
        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-plus" />
        </button>
        { /* /.box-tools */ }
      </div>
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
