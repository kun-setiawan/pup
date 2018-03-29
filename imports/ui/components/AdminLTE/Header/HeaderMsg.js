import React from 'react';
import PropTypes from 'prop-types';

const HeaderMsg = props => (
  <li className="dropdown messages-menu">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      <i className="fa fa-envelope-o" />
      <span className="label label-success">{props.data.number}</span>
    </a>
    <ul className="dropdown-menu">
      <li className="header">You have {props.data.number} messages</li>
      <li>
        <ul className="menu">
          {props.data.items.map(item => (
            <li>
              <a href="#">
                <div className="pull-left">
                  <img src={item.avatar} className="img-circle" alt="User Image" />
                </div>
                <h4>
                  {item.fullName}
                  <small><i className="fa fa-clock-o" /> {item.timePast}</small>
                </h4>
                <p>{item.subject}</p>
              </a>
            </li>
            ))}
        </ul>
      </li>
      <li className="footer"><a href="#">See All Messages</a></li>
    </ul>
  </li>
);

HeaderMsg.defaultProps = {
};

HeaderMsg.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HeaderMsg;
