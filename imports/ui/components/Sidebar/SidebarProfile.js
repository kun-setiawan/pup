// ---------------- TO BE DELETED AND MERGED WITH HeaderSettingGeneral WHEN DATA IS JSONIFIED ----------------  //
import React from 'react';
import PropTypes from 'prop-types';

const SidebarProfile = props => (
  <div className="user-panel">
    <div className="pull-left image">
      <img src={props.userProfile.avatar} className="img-circle" alt="User Image" />
    </div>
    <div className="pull-left info">
      <p>{props.userProfile.fullName}</p>
      <a href="#"><i className="fa fa-circle text-success" /> {props.userProfile.loggedIn ? 'Online' : 'Offline'}</a>
    </div>
  </div>
);

SidebarProfile.defaultProps = {
};

SidebarProfile.propTypes = {
  userProfile: PropTypes.object.isRequired,
};

export default SidebarProfile;
