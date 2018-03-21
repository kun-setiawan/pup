import React from 'react';
import PropTypes from 'prop-types';

const BreadcrumbSimple = () => (
  <section className="content-header">
    <h1>
            Dashboard
            <small>Control panel</small>
    </h1>
    <ol className="breadcrumb">
      <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
      <li className="active">Dashboard</li>
    </ol>
  </section>
);

BreadcrumbSimple.defaultProps = {
};

BreadcrumbSimple.propTypes = {
};

export default BreadcrumbSimple;
