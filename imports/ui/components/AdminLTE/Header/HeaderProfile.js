import React from 'react';
import PropTypes from 'prop-types';

const HeaderProfile = props => (
  <li className="dropdown user user-menu">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      <img src={props.userProfile.avatar} className="user-image" alt="User Image" />
      <span className="hidden-xs">{props.userProfile.fullName}</span>
    </a>
    <ul className="dropdown-menu">
      <li className="user-header">
        <img src={props.userProfile.avatar} className="img-circle" alt="User Image" />

        <p>
          {props.userProfile.fullName} - {props.userProfile.position}
          <small>Member since {props.userProfile.joinDate}</small>
        </p>
      </li>
      <li className="user-body">
        <div className="row">
          <div className="col-xs-4 text-center">
            <a href="#">Followers</a>
          </div>
          <div className="col-xs-4 text-center">
            <a href="#">Sales</a>
          </div>
          <div className="col-xs-4 text-center">
            <a href="#">Friends</a>
          </div>
        </div>
      </li>
      <li className="user-footer">
        <div className="pull-left">
          <a href="#" className="btn btn-default btn-flat">Profile</a>
        </div>
        <div className="pull-right">
          <a href="#" className="btn btn-default btn-flat">Sign out</a>
        </div>
      </li>
    </ul>
  </li>
);

HeaderProfile.defaultProps = {
};

HeaderProfile.propTypes = {
  userProfile: PropTypes.object.isRequired,
};

export default HeaderProfile;
