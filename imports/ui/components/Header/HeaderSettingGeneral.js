import React from 'react';

const HeaderSettingGeneral = () => (
  <div className="tab-pane active" id="control-sidebar-theme-demo-options-tab">
    { /* Theme Demo Options tab content */ }
    <h4 className="control-sidebar-heading">
        Layout Options
    </h4>
    { /* Fixed layout */ }
    <div className="form-group">
      <label className="control-sidebar-subheading">
        <input type="checkbox"data-layout="fixed"className="pull-right" />
            Fixed layout
      </label>
      <p>Activate the fixed layout. You can&#39;t use fixed and boxed layouts together</p>
    </div>
    { /* Boxed layout */ }
    <div className="form-group">
      <label className="control-sidebar-subheading">
        <input type="checkbox"data-layout="layout-boxed" className="pull-right" />
            Boxed Layout
      </label>
      <p>Activate the boxed layout</p>
    </div>
    { /* Sidebar Toggle */ }
    <div className="form-group">
      <label className="control-sidebar-subheading">
        <input type="checkbox"data-layout="sidebar-collapse"className="pull-right" />
            Toggle Sidebar
      </label>
      <p>Toggle the left sidebar&#39;s state (open or collapse)</p>
    </div>
    { /* Sidebar mini expand on hover toggle */ }
    <div className="form-group">
      <label className="control-sidebar-subheading">
        <input type="checkbox"data-enable="expandOnHover"className="pull-right" />
            Sidebar Expand on Hover
      </label>
      <p>Let the sidebar mini expand on hover</p>
    </div>
    { /* Control Sidebar Toggle */ }
    <div className="form-group">
      <label className="control-sidebar-subheading">
        <input type="checkbox"data-controlsidebar="control-sidebar-open"className="pull-right" />
            Toggle Right Sidebar Slide
      </label>
      <p>Toggle between slide over content and push content effects</p>
    </div>
    { /* Control Sidebar Skin Toggle */ }
    <div className="form-group">
      <label className="control-sidebar-subheading">
        <input type="checkbox"data-sidebarskin="toggle"className="pull-right" />
            Toggle Right Sidebar Skin
      </label>
      <p>Toggle between dark and light skins for the right sidebar</p>
    </div>
    { /* /.tab-pane */ }
  </div>
);

HeaderSettingGeneral.defaultProps = {
};

HeaderSettingGeneral.propTypes = {
};

export default HeaderSettingGeneral;
