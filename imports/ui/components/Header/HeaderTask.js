import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeaderTask = props => (
  <li className="dropdown tasks-menu">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      <i className="fa fa-flag-o" />
      <span className="label label-danger">{props.data.number}</span>
    </a>
    <ul className="dropdown-menu">
      <li className="header">You have {props.data.number} tasks</li>
      <li>
        <ul className="menu">
          {props.data.items.map(item => (
            <li>
              <a href="#">
                <h3>
                  {item.title}
                  <small className="pull-right">{item.value}%</small>
                </h3>
                <div className="progress xs">
                  <div
                    className={classNames(`progress-bar progress-bar-${item.bg}`)}
                    style={{ width: `${item.value}%` }}
                    role="progressbar"
                    aria-valuenow={item.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="sr-only">{item.value}% Complete</span>
                  </div>
                </div>
              </a>
            </li>
            ))}
        </ul>
      </li>
      <li className="footer">
        <a href="#">View all tasks</a>
      </li>
    </ul>
  </li>
);

HeaderTask.defaultProps = {
};

HeaderTask.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HeaderTask;
