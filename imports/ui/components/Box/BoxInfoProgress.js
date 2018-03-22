import React from 'react';

const BoxInfoProgress = () => (
  <div className="info-box bg-aqua">
    <span className="info-box-icon"><i className="fa fa-bookmark-o" /></span>

    <div className="info-box-content">
      <span className="info-box-text">Bookmarks</span>
      <span className="info-box-number">41,410</span>

      <div className="progress">
        <div className="progress-bar" style={{ width: '70%' }} />
      </div>
      <span className="progress-description">
                    70% Increase in 30 Days
      </span>
      { /* /.info-box-content */ }
    </div>
    { /* /.info-box */ }
  </div>
);

BoxInfoProgress.defaultProps = {
};

BoxInfoProgress.propTypes = {
};

export default BoxInfoProgress;
