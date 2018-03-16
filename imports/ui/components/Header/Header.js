import React from 'react';
import PropTypes from 'prop-types';
import HeaderNav from '../Header/HeaderNav';
import HeaderTask from '../Header/HeaderTask';
import HeaderNotif from '../Header/HeaderNotif';
import HeaderMsg from '../Header/HeaderMsg';
import HeaderSettingGeneral from '../Header/HeaderSettingGeneral';
import HeaderSettingActivity from '../Header/HeaderSettingActivity';
import HeaderSettingGeneral2 from '../Header/HeaderSettingGeneral2';

const Header = props => (
  <div>
    <header className="main-header">
      <a href="index2.html" className="logo">
        <span className="logo-mini"><b>A</b>LT</span>
        <span className="logo-lg"><b>Admin</b>LTE</span>
      </a>
      <nav className="navbar navbar-static-top">
        {props.authenticated ?
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a> : '' }
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            {!props.authenticated ?
              <li>
                <div className="box-body">
                  <a href="/login" className="btn btn-block btn-social btn-github">
                    <i className="fa fa-lock" /> Sign in
                  </a>
                </div>
              </li> : ''
              }
            {props.authenticated ? <HeaderMsg /> : '' }
            {props.authenticated ? <HeaderNotif /> : '' }
            {props.authenticated ? <HeaderTask /> : '' }
            {props.authenticated ?
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                  <span className="hidden-xs">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />

                    <p>
                                      Alexander Pierce - Web Developer
                                      <small>Member since Nov. 2012</small>
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
              </li> : '' }
            {props.authenticated ?
              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
              </li> : '' }
          </ul>
        </div>
      </nav>
    </header>

    {props.authenticated ? <HeaderNav /> : '' }
    {props.authenticated ?
      <aside className="control-sidebar control-sidebar-dark">
        { /* Control Sidebar */ }
        { /* Create the tabs */ }
        <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
          <li><a href="#control-sidebar-theme-demo-options-tab" data-toggle="tab"><i className="fa fa-wrench" /></a></li>
          <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home" /></a></li>
          <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears" /></a></li>
        </ul>
        { /* Tab panes */ }
        <div className="tab-content">

          <HeaderSettingGeneral />
          <HeaderSettingActivity />
          { /* TO BE DELETED AND MERGED WITH HeaderSettingGeneral WHEN DATA IS JSONIFIED */ }
          <HeaderSettingGeneral2 />

        </div>
        { /* /.control-sidebar */ }
      </aside>
        : '' }
  </div>
);

Header.defaultProps = {
  name: '',
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default Header;
