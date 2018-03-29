import React from 'react';

const SocialProfileVertical = () => (
  <div className="box box-widget widget-user-2">
    { /* Widget: user widget style 1 */ }
    { /* Add the bg color to the header using any of the bg-* classes */ }
    <div className="widget-user-header bg-yellow">
      <div className="widget-user-image">
        <img className="img-circle" src="../dist/img/user7-128x128.jpg" alt="User Avatar" />
      </div>
      { /* /.widget-user-image */ }
      <h3 className="widget-user-username">Nadia Carmichael</h3>
      <h5 className="widget-user-desc">Lead Developer</h5>
    </div>
    <div className="box-footer no-padding">
      <ul className="nav nav-stacked">
        <li><a href="#">Projects <span className="pull-right badge bg-blue">31</span></a></li>
        <li><a href="#">Tasks <span className="pull-right badge bg-aqua">5</span></a></li>
        <li><a href="#">Completed Projects <span className="pull-right badge bg-green">12</span></a></li>
        <li><a href="#">Followers <span className="pull-right badge bg-red">842</span></a></li>
      </ul>
    </div>
    { /* /.widget-user */ }
  </div>
);

SocialProfileVertical.defaultProps = {
};

SocialProfileVertical.propTypes = {
};

export default SocialProfileVertical;
