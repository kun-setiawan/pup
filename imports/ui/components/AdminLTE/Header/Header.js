import React from 'react';
import PropTypes from 'prop-types';
import HeaderNav from '../Header/HeaderNav';
import HeaderTask from '../Header/HeaderTask';
import HeaderNotif from '../Header/HeaderNotif';
import HeaderMsg from '../Header/HeaderMsg';
import HeaderSettingGeneral from '../Header/HeaderSettingGeneral';
import HeaderSettingActivity from '../Header/HeaderSettingActivity';
import HeaderProfile from '../Header/HeaderProfile';
import classNames from "classnames";

const Header = props => (
  <div className={classNames({ 'layout-top-nav': !props.authenticated })}>
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
            {props.authenticated ? <HeaderMsg data={props.headerMessages} /> : '' }
            {props.authenticated ? <HeaderNotif data={props.headerNotifications} /> : '' }
            {props.authenticated ? <HeaderTask data={props.headerTasks} /> : '' }
            {props.authenticated ? <HeaderProfile userProfile={props.userProfile} /> : '' }
            {props.authenticated ?
              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
              </li> : '' }
          </ul>
        </div>
      </nav>
    </header>

    {props.authenticated ? <HeaderNav userProfile={props.userProfile} /> : '' }
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

          <HeaderSettingGeneral data={props.headerOptions} id="control-sidebar-theme-demo-options-tab" active />
          <HeaderSettingActivity data={props.headerActivities} id="control-sidebar-home-tab" />
          <HeaderSettingGeneral data={props.headerSettings} id="control-sidebar-settings-tab" />

        </div>
        { /* /.control-sidebar */ }
      </aside>
        : '' }
  </div>
);

Header.defaultProps = {
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  headerSettings: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerActivities: PropTypes.object.isRequired,
  userProfile: PropTypes.object.isRequired,
  headerTasks: PropTypes.object.isRequired,
  headerNotifications: PropTypes.object.isRequired,
  headerMessages: PropTypes.object.isRequired,
};

export default Header;
