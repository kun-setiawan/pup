import React from 'react';
import SidebarProfile from '../Sidebar/SidebarProfile';
import SidebarSearch from '../Sidebar/SidebarSearch';
import SidebarNav from '../Sidebar/SidebarNav';

const HeaderNav = () => (
  <div>
    <aside className="main-sidebar">
      <section className="sidebar">
        <SidebarProfile />
        <SidebarSearch />
        <SidebarNav />
      </section>
    </aside>
  </div>
);

HeaderNav.defaultProps = {
};

HeaderNav.propTypes = {
};

export default HeaderNav;
