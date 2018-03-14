import PropTypes from 'prop-types';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Table from '../../components/Table/Table';
import TableData from '../../components/Table/TableData';
import BoxSmall from '../../components/Box/BoxSmall';
import BoxInfo from '../../components/Box/BoxInfo';
import Box from '../../components/Box/Box';

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
      <div className="row">
        <h2>Box Small</h2>

        <BoxSmall />
        <BoxSmall
          number={53}
          sign="%"
          text="Bounce Rate"
          icon="ion-stats-bars"
          color="green"
          url="/bounce-rate"
        />
        <BoxSmall
          number={44}
          text="User Registrations"
          icon="ion-person-add"
          color="yellow"
          url="/user-registrations"
        />
        <BoxSmall
          number={65}
          text="Unique Visitors"
          icon="ion-pie-graph"
          color="red"
          url="/unique-visitors"
        />
      </div>

      <div className="row">
        <h2>Box Info with Background Color</h2>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo
            icon="ion ion-ios-gear-outline"
            text="cpu traffic"
            count="90"
            countSign="%"
            color="aqua"
            progressCount={50}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo
            icon="fa fa-google-plus"
            text="likes"
            count="41,410"
            color="red"
            progressCount={90}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo
            icon="ion ion-ios-cart-outline"
            text="sales"
            count="760"
            color="green"
            progressCount={20}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo
            icon="ion ion-ios-people-outline"
            text="new members"
            count="2,000"
            color="yellow"
            progressCount={30}
          />
        </div>
      </div>

      <div className="row">
        <h2>Box Info</h2>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo
            icon="ion ion-ios-gear-outline"
            text="cpu traffic"
            count="90"
            countSign="%"
            color="aqua"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo
            icon="fa fa-google-plus"
            text="likes"
            count="41,410"
            color="red"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo
            icon="ion ion-ios-cart-outline"
            text="sales"
            count="760"
            color="green"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <BoxInfo
            icon="ion ion-ios-people-outline"
            text="new members"
            count="2,000"
            color="yellow"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Box title="Expandable" expandable collapsed>
                    The body of the box
          </Box>
        </div>
        <div className="col-md-3">
          <Box title="Removable" status="success" removable>
                    The body of the box
          </Box>
        </div>
        <div className="col-md-3">
          <Box title="Collapsable" status="warning" expandable>
                    The body of the box
          </Box>
        </div>
        <div className="col-md-3">
          <Box title="Loading state" status="danger" loading>
                    The body of the box
          </Box>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Box title="Expandable" solid expandable collapsed>
                    The body of the box
          </Box>
        </div>
        <div className="col-md-3">
          <Box title="Removable" status="success" solid removable>
                    The body of the box
          </Box>
        </div>
        <div className="col-md-3">
          <Box title="Collapsable" status="warning" solid expandable>
                    The body of the box
          </Box>
        </div>
        <div className="col-md-3">
          <Box title="Loading state" status="danger" solid loading>
                    The body of the box
          </Box>
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

