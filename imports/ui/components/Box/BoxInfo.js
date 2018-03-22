import React from 'react';

const BoxInfo = () => (
  <div className="info-box">
    <span className="info-box-icon bg-green"><i className="fa fa-flag-o" /></span>

    <div className="info-box-content">
      <span className="info-box-text">Bookmarks</span>
      <span className="info-box-number">410</span>
    </div>
    { /* /.info-box-content */ }
    { /* /.info-box */ }
  </div>
);

BoxInfo.defaultProps = {
};

BoxInfo.propTypes = {
};

export default BoxInfo;
