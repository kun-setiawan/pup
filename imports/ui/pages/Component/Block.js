import React from 'react';
import BlockDescription from '../../components/Block/BlockDescription';

const ComponentList = () => (
  <div>
    { /*  Main content */ }
    <section className="content">
      <div className="row">
        <div className="col-sm-3 col-xs-6">
          <BlockDescription />
        </div>
        <div className="col-sm-3 col-xs-6">
          <BlockDescription />
        </div>
        <div className="col-sm-3 col-xs-6">
          <BlockDescription />
        </div>
        <div className="col-sm-3 col-xs-6">
          <BlockDescription />
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

