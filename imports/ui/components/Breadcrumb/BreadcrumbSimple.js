import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BreadcrumbItem from './BreadcrumbItem';

BreadcrumbItem.propTypes = {
  items: PropTypes.array.isRequired,
};

class BreadcrumbSimple extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    return this.props.items.map(item => <BreadcrumbItem {...item} />);
  }

  render() {
    return (
      <ol className="breadcrumb">
        {this.renderItems()}
      </ol>
    );
  }
}

export default BreadcrumbSimple;
