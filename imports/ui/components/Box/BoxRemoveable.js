import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class BoxRemoveable extends Component {
  getClasses() {
    return classNames(
      'box',
      `box-${this.props.status}`,
      { 'box-solid': this.props.solid },
    );
  }

  renderRemoveButton() {
    if (this.props.removable) {
      return (
        <button
          type="button"
          className="btn btn-box-tool"
          data-widget="remove"
        >
          <i className="fa fa-times" />
        </button>
      );
    }
    return '';
  }

  render() {
    return (
      <div className={this.getClasses()}>
        <div className="box-header with-border">
          <h3 className="box-title">{this.props.title}</h3>

          <div className="box-tools pull-right">
            {this.renderExpandButton()}
            {this.renderRemoveButton()}
          </div>
        </div>
        <div className="box-body">
          {this.props.children}
        </div>
        {this.renderLoading()}
      </div>
    );
  }
}


BoxRemoveable.defaultProps = {
  status: 'default',
  solid: false,
  expandable: false,
  removable: false,
  collapsed: false,
  loading: false,
};

BoxRemoveable.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  solid: PropTypes.bool.isRequired,
  expandable: PropTypes.bool.isRequired,
  removable: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default BoxRemoveable;

