// ---------------- TO BE DELETED AND MERGED WITH HeaderSettingGeneral WHEN DATA IS JSONIFIED ----------------  //
import React from 'react';

const HeaderSettingGeneral = () => (
  <div className="user-panel">
    <div className="pull-left image">
      <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
    </div>
    <div className="pull-left info">
      <p>Alexander Pierce</p>
      <a href="#"><i className="fa fa-circle text-success" /> Online</a>
    </div>
  </div>
);

HeaderSettingGeneral.defaultProps = {
};

HeaderSettingGeneral.propTypes = {
};

export default HeaderSettingGeneral;
