import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  formatTable() {
    let tableShape = 'table';
    switch (this.props.shape) {
      case 'condensed':
        tableShape = 'table table-condensed';
        break;
      case 'striped':
        tableShape = 'table table-striped';
        break;
      case 'hover':
        tableShape = 'table table-hover';
        break;
      case 'bordered':
        tableShape = 'table table-bordered';
        break;
      default:
        tableShape = 'table';
    }
    return tableShape;
  }

  render() {
    return (
      <div className="box">
        { this.props.title && !(this.props.title === '') ?
          <div className="box-header with-border">
            <h3 className="box-title">{this.props.title}</h3>
          </div> : '' }
        { /* /.box-header */ }
        <div className="box-body">
          <table className={this.formatTable(this.props.shape)}>
            <thead>
              <tr>
                <th style={{ width: '10px' }}>#</th>
                <th>Task</th>
                <th>Progress</th>
                <th style={{ width: '40px' }}>Label</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map(row => (
                <tr>
                  {row.map(field => (
                    <td>{field}</td>
                              ))}
                </tr>
                      ))}
            </tbody>
          </table>
        </div>
        { /* /.box-body */ }
        <div className="box-footer clearfix">
          <ul className="pagination pagination-sm no-margin pull-right">
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&raquo;</a></li>
          </ul>
        </div>
        { /* /.box */ }
      </div>
    );
  }
}

Table.defaultProps = {
  title: '',
  shape: '',
};

Table.propTypes = {
  title: PropTypes.string,
  shape: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Table;
