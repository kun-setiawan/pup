import React from 'react';
import PropTypes from 'prop-types';
import SidebarProfile from '../Sidebar/SidebarProfile';
import SidebarSearch from '../Sidebar/SidebarSearch';
import SidebarNav from '../Sidebar/SidebarNav';

const HeaderNav = props => (
  <div>
    <aside className="main-sidebar">
      <section className="sidebar">
        <SidebarProfile userProfile={props.userProfile} />
        <SidebarSearch />
        <SidebarNav />
      </section>
    </aside>
  </div>
);

HeaderNav.defaultProps = {
};

HeaderNav.propTypes = {
  userProfile: PropTypes.object.isRequired,
};

export default HeaderNav;
