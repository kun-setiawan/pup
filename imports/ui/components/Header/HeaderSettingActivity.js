import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeaderSettingActivity = ({ data, id, active }) => (
  <div className={classNames('tab-pane', { active })} id={id}>
    { /* Home tab content */ }
    <h3 className="control-sidebar-heading">Recent Activity</h3>
    <ul className="control-sidebar-menu">
      {data.activities.map(activity => (
        <li>
          <a href="#">
            <i className={classNames(`menu-icon fa ${activity.icon} bg-${activity.bg}`)} />

            <div className="menu-info">
              <h4 className="control-sidebar-subheading">{activity.title}</h4>

              <p>{activity.sub}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
    { /* /.control-sidebar-menu */ }

    <h3 className="control-sidebar-heading">Tasks Progress</h3>
    <ul className="control-sidebar-menu">
      {data.tasks.map(task => (
        <li>
          <a href="#">
            <h4 className="control-sidebar-subheading">
              {task.title}
              <span className={classNames(`label label-${task.bg} pull-right`)}>{task.value}%</span>
            </h4>

            <div className="progress progress-xxs">
              <div className={classNames(`progress-bar progress-bar-${task.bg}`)} style={{ width: `${task.value}%` }} />
            </div>
          </a>
        </li>
        ))}
    </ul>
    { /* /.control-sidebar-menu */ }

    { /* /.tab-pane */ }
  </div>
);

HeaderSettingActivity.defaultProps = {
  active: false,
};

HeaderSettingActivity.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default HeaderSettingActivity;
