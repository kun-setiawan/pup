import React from 'react';

const ProgressBarVertical = () => (
  <div className="box box-solid">
    <div className="box-header with-border">
      <h3 className="box-title">Vertical Progress Bars Different Sizes</h3>
    </div>
    { /* /.box-header */ }
    <div className="box-body text-center">
      <p>By adding the class <code>.vertical</code> and <code>.progress-sm</code>, <code>.progress-xs</code> or
                <code>.progress-xxs</code> we achieve:
      </p>

      <div className="progress vertical active">
        <div className="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="height: 40%">
          <span className="sr-only">40%</span>
        </div>
      </div>
      <div className="progress vertical progress-sm">
        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="height: 100%">
          <span className="sr-only">100%</span>
        </div>
      </div>
      <div className="progress vertical progress-xs">
        <div className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="height: 60%">
          <span className="sr-only">60%</span>
        </div>
      </div>
      <div className="progress vertical progress-xxs">
        <div className="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="height: 60%">
          <span className="sr-only">60%</span>
        </div>
      </div>
    </div>
    { /* /.box-body */ }
  </div>
);

ProgressBarVertical.defaultProps = {
};

ProgressBarVertical.propTypes = {
};

export default ProgressBarVertical;
