import React from 'react';
import Table from '../../components/Table/Table';

const ComponentList = () => (
  <div>
    { /*  Main content */ }
    <section className="content">
      <div className="row">
        <div className="col-md-6">
          <Table />
        </div>
        <div className="col-md-6">
          <Table />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Table />
        </div>
        <div className="col-md-6">
          <Table />
        </div>
      </div>
    </section>
  </div>
);

ComponentList.defaultProps = {
};

ComponentList.propTypes = {
};

export default ComponentList;
