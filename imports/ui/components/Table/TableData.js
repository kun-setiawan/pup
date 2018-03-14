import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

const Table = ({
  title, header, data, tableShape,
}) => (
  <div className="box">
    <div className="box-header">
      <h3 className="box-title">{title}</h3>
    </div>
    { /* /.box-header */ }
    <div className="box-body">
      <table id="tableData" className={tableShape}>
        <thead>
          <tr>
            {header.map(field => (
              <th>{field.text}</th>
                      ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr>
              {row.map(field => (
                <td>{field}</td>
                  ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
              {header.map(field => (
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

Table.defaultProps = {
  title: '',
  shape: '',
  tableShape: '',
};

Table.propTypes = {
  title: PropTypes.string,
  shape: PropTypes.string,
  tableShape: PropTypes.string,
  header: PropTypes.arrayOf(PropTypes.array).isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default withTracker((props) => {
  let tableShape = 'table';
  switch (props.shape) {
    case 'striped':
      tableShape = 'table table-bordered table-striped';
      break;
    case 'hover':
      tableShape = 'table table-bordered table-hover';
      break;
    default:
      tableShape = 'table table-bordered ';
  }
  return {
    tableShape,
  };
})(Table);
