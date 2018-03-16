import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { year } from '../../../modules/dates';

import './Footer.scss';

const copyrightYear = () => {
  const currentYear = year();
  return currentYear === '2017' ? '2017' : `2017-${currentYear}`;
};

const Footer = () => (
  <div className="main-footer">
      <div className="pull-right hidden-xs">
          <b>Version</b> 2.3.5
      </div>
      <strong>
          <span>Copyright &copy; {copyrightYear()} </span>
          <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.
      </strong> All rights reserved.
  </div>
);

Footer.propTypes = {};

export default Footer;
