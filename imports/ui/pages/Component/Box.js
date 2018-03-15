import React from 'react';
import BoxSmall from '../../components/Box/BoxSmall';
import BoxInfo from '../../components/Box/BoxInfo';
import Box from '../../components/Box/Box';

const Boxes = () => (
  <div>
    { /*  Main content */ }
    <section>

      <div className="row">
        <h2 style={{color: 'white'}}>Box Small</h2>

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
        <h2 style={{color: 'white'}}>Box Info with Background Color</h2>
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
        <h2 style={{color: 'white'}}>Box Info</h2>
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

export default Boxes;

