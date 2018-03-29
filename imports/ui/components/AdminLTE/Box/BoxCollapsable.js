import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import $ from 'jquery';

export default class BoxInfoCollapsable extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className={classNames(`box ${this.props.style} box-solid`)}>
        <div className="box-header with-border">
          <h3 className="box-title">{this.props.title}</h3>

          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
            </button>
            { /* /.box-tools */ }
          </div>
        </div>
        { /* /.box-header */ }
        <div className="box-body">
          {this.props.desc}
        </div>
        { /* /.box-body */ }
        { /* /.box */ }
      </div>
    );
  }
}

BoxInfoCollapsable.defaultProps = {
  style: 'box-default',
};

BoxInfoCollapsable.propTypes = {
  style: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
