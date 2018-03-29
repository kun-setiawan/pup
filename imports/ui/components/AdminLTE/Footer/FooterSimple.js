import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FooterSimple = props => (
  <div className={classNames({ 'layout-top-nav': !props.authenticated })}>
    <footer className="main-footer">
      <div className="pull-right hidden-xs">
        <b>Version</b> 2.4.0
      </div>
      <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
        reserved.
    </footer>
  </div>
);

FooterSimple.defaultProps = {
};

FooterSimple.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default FooterSimple;
