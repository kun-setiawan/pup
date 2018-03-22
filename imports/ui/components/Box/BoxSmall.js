import React from 'react';

const BoxSmall = () => (
  <div className="small-box bg-aqua">
    { /* small box */ }
    <div className="inner">
      <h3>150</h3>

      <p>New Orders</p>
    </div>
    <div className="icon">
      <i className="fa fa-shopping-cart" />
    </div>
    <a href="#" className="small-box-footer">
            More info <i className="fa fa-arrow-circle-right" />
    </a>
  </div>
);

BoxSmall.defaultProps = {
};

BoxSmall.propTypes = {
};

export default BoxSmall;
