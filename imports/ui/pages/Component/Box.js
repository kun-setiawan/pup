import React from 'react';
import BoxSmall from '../../components/Box/BoxSmall';
import BoxInfo from '../../components/Box/BoxInfo';
import BoxInfoProgress from '../../components/Box/BoxInfoProgress';
import BoxRemovable from '../../components/Box/BoxRemovable';
import BoxCollapsable from '../../components/Box/BoxCollapsable';

const Boxes = () => (
  <div>
    { /*  Main content */ }
    <section>

      <div className="row">
        <h2 style={{ color: 'white' }}>Box Info</h2>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo />
        </div>
      </div>

      <div className="row">
        <h2 style={{ color: 'white' }}>Box Info Progress</h2>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfoProgress />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfoProgress />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfoProgress />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfoProgress />
        </div>
      </div>

      <div className="row">
        <h2 style={{ color: 'white' }}>Box Small</h2>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxSmall />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxSmall />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxSmall />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxSmall />
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxCollapsable />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxCollapsable />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxRemovable />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxRemovable />
        </div>
      </div>

    </section>
  </div>
);

export default Boxes;

