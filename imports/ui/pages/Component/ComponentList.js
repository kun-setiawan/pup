import PropTypes from 'prop-types';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Table from '../../components/Table/Table';
import TableData from '../../components/Table/TableData';

const ComponentList = ({ tableData1 }) => (
  <div>
    { /*  Main content */ }
    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <Table data={tableData1} title="Simple Table" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Table data={tableData1} title="Bordered Table" shape="bordered" />
        </div>
        <div className="col-md-6">
          <Table data={tableData1} title="Condensed Table" shape="condensed" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Table data={tableData1} title="Striped Table" shape="striped" />
        </div>
        <div className="col-md-6">
          <Table data={tableData1} title="Responsive Hover Table" shape="hover" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <TableData />
        </div>
      </div>

    </section>
  </div>
);

ComponentList.defaultProps = {
};

ComponentList.propTypes = {
  tableData1: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default withTracker(() => {
  const tableData1 = [
    ['1. ', 'Update software', 55, '55%'],
    ['2. ', 'Clean database', 70, '70%'],
    ['3. ', 'Cron job running', 30, '30%'],
    ['4. ', 'Fix and squish bugs', 90, '90%'],
  ];

  return {
    tableData1,
  };
})(ComponentList);

