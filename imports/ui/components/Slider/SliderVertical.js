import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TableData extends Component {
  formatTable() {
    let tableShape = 'table';
    switch (this.props.shape) {
      case 'striped':
        tableShape = 'table table-bordered table-striped';
        break;
      case 'hover':
        tableShape = 'table table-bordered table-hover';
        break;
      default:
        tableShape = 'table table-bordered ';
    }
    return tableShape;
  }

  render() {
    return (
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">{this.props.title}</h3>
        </div>
        { /* /.box-header */ }
        <div className="box-body">
          <table id="tableData" className={this.formatTable(this.props.shape)}>
            <thead>
              <tr>
                {this.props.header.map(field => (
                  <th>{field.text}</th>
                            ))}
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
            <tfoot>
              <tr>
                {this.props.header.map(field => (
                  <th>{field.text}</th>
                            ))}
              </tr>
            </tfoot>
          </table>
          { /* /.box-body */ }
        </div>
        { /* /.box */ }
      </div>
    );
  }
}


TableData.defaultProps = {
  title: '',
  shape: '',
};

TableData.propTypes = {
  title: PropTypes.string,
  shape: PropTypes.string,
  header: PropTypes.arrayOf(PropTypes.array).isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default TableData;
