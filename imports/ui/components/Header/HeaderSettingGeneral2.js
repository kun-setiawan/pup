// ---------------- TO BE DELETED AND MERGED WITH HeaderSettingGeneral WHEN DATA IS JSONIFIED ----------------  //
import React from 'react';

const HeaderSettingGeneral = () => (
  <div className="tab-pane" id="control-sidebar-settings-tab">
    { /* Settings tab content */ }
    <form method="post">
      <h3 className="control-sidebar-heading">General Settings</h3>

      <div className="form-group">
        <label className="control-sidebar-subheading">
                Report panel usage
                <input type="checkbox" className="pull-right" defaultChecked />
        </label>

        <p>
                Some information about this general settings option
        </p>
      </div>
      { /* /.form-group */ }

      <div className="form-group">
        <label className="control-sidebar-subheading">
                Allow mail redirect
                <input type="checkbox" className="pull-right" defaultChecked />
        </label>

        <p>
                Other sets of options are available
        </p>
      </div>
      { /* /.form-group */ }

      <div className="form-group">
        <label className="control-sidebar-subheading">
                Expose author name in posts
                <input type="checkbox" className="pull-right" defaultChecked />
        </label>

        <p>
                Allow the user to show his name in blog posts
        </p>
      </div>
      { /* /.form-group */ }

      <h3 className="control-sidebar-heading">Chat Settings</h3>

      <div className="form-group">
        <label className="control-sidebar-subheading">
                Show me as online
                <input type="checkbox" className="pull-right" defaultChecked />
        </label>
      </div>
      { /* /.form-group */ }

      <div className="form-group">
        <label className="control-sidebar-subheading">
                Turn off notifications
                <input type="checkbox" className="pull-right" />
        </label>
      </div>
      { /* /.form-group */ }

      <div className="form-group">
        <label className="control-sidebar-subheading">
                Delete chat history
                <a href="#" className="text-red pull-right"><i className="fa fa-trash-o" /></a>
        </label>
      </div>
      { /* /.form-group */ }
    </form>
    { /* /.tab-pane */ }
  </div>

);

HeaderSettingGeneral.defaultProps = {
};

HeaderSettingGeneral.propTypes = {
};

export default HeaderSettingGeneral;
