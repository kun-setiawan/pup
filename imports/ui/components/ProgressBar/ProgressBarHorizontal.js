import React from 'react';

const ProgressBarVertical = () => (
  <div className="box box-solid">
    <div className="box-header with-border">
      <h3 className="box-title">Progress bars</h3>
    </div>
    { /* /.box-header */ }
    <div className="box-body">
      <div className="progress">
        <div className="progress-bar progress-bar-green" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
          <span className="sr-only">40% Complete (success)</span>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar progress-bar-aqua" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
          <span className="sr-only">20% Complete</span>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar progress-bar-yellow" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
          <span className="sr-only">60% Complete (warning)</span>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar progress-bar-red" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
          <span className="sr-only">80% Complete</span>
        </div>
      </div>
    </div>
    { /* /.box-body */ }
    { /* /.box */ }
  </div>
);

ProgressBarVertical.defaultProps = {
};

ProgressBarVertical.propTypes = {
};

export default ProgressBarVertical;
