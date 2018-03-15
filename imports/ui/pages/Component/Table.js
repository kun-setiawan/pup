import PropTypes from 'prop-types';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Table from '../../components/Table/Table';

const ComponentList = ({ tableHeader, tableData }) => (
  <div>
    { /*  Main content */ }
    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <Table header={tableHeader} data={tableData} title="Simple Table" shape="bordered" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Table header={tableHeader} data={tableData} title="Bordered Table" shape="bordered" />
        </div>
        <div className="col-md-6">
          <Table header={tableHeader} data={tableData} title="Condensed Table" shape="condensed" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Table header={tableHeader} data={tableData} title="Striped Table" shape="striped" />
        </div>
        <div className="col-md-6">
          <Table header={tableHeader} data={tableData} title="Responsive Hover Table" shape="hover" />
        </div>
      </div>
    </section>
  </div>
);

ComponentList.defaultProps = {
};

ComponentList.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.array).isRequired,
  tableHeader: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withTracker(() => {
  const tableHeader = [{ text: '#', width: '10px' }, { text: 'Task' }, { text: 'Progress' }, { text: 'Label', width: '10px' }];
  const tableData = [
    ['1. ', 'Update software', 55, '55%'],
    ['2. ', 'Clean database', 70, '70%'],
    ['3. ', 'Cron job running', 30, '30%'],
    ['4. ', 'Fix and squish bugs', 90, '90%'],
  ];
  return {
    tableData, tableHeader,
  };
})(ComponentList);

