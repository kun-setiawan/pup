import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeaderNotif = props => (
  <li className="dropdown notifications-menu">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      <i className="fa fa-bell-o" />
      <span className="label label-warning">{props.data.number}</span>
    </a>
    <ul className="dropdown-menu">
      <li className="header">You have {props.data.number} notifications</li>
      <li>
        <ul className="menu">
          {props.data.items.map(item => (
            <li>
              <a href="#">
                <i className={classNames(`fa ${item.icon} text-${item.bg}`)} /> {item.title}
              </a>
            </li>
            ))}
        </ul>
      </li>
      <li className="footer"><a href="#">View all</a></li>
    </ul>
  </li>
);

HeaderNotif.defaultProps = {
};

HeaderNotif.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HeaderNotif;
