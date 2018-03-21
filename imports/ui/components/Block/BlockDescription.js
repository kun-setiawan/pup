import React from 'react';
import PropTypes from 'prop-types';

const BlockDescription = () => (
  <div className="description-block border-right">
    <span className="description-percentage text-green"><i className="fa fa-caret-up" /> 17%</span>
    <h5 className="description-header">$35,210.43</h5>
    <span className="description-text">TOTAL REVENUE</span>
    { /* /.description-block --> */ }
  </div>
);

BlockDescription.defaultProps = {
};

BlockDescription.propTypes = {
};

export default BlockDescription;
