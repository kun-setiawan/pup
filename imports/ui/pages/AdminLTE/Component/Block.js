import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import BlockDescription from '../../../components/AdminLTE/Block/BlockDescription';

const BlockPage = props => (
  <div>
    { /*  Main content */ }
    <section className="content">
      <div className="row">
        <div className="col-sm-3 col-xs-6">
          <BlockDescription titleValue={props.blockDescriptionData1.titleValue} subValue={props.blockDescriptionData1.subValue} desc={props.blockDescriptionData1.desc} icon={props.blockDescriptionData1.icon} color={props.blockDescriptionData1.color} />
        </div>
        <div className="col-sm-3 col-xs-6">
          <BlockDescription titleValue={props.blockDescriptionData2.titleValue} subValue={props.blockDescriptionData2.subValue} desc={props.blockDescriptionData2.desc} icon={props.blockDescriptionData2.icon} color={props.blockDescriptionData2.color} />
        </div>
        <div className="col-sm-3 col-xs-6">
          <BlockDescription titleValue={props.blockDescriptionData3.titleValue} subValue={props.blockDescriptionData3.subValue} desc={props.blockDescriptionData3.desc} icon={props.blockDescriptionData3.icon} color={props.blockDescriptionData3.color} />
        </div>
        <div className="col-sm-3 col-xs-6">
          <BlockDescription titleValue={props.blockDescriptionData4.titleValue} subValue={props.blockDescriptionData4.subValue} desc={props.blockDescriptionData4.desc} icon={props.blockDescriptionData4.icon} color={props.blockDescriptionData4.color} />
        </div>
      </div>
    </section>
  </div>
);

BlockPage.defaultProps = {
};

BlockPage.propTypes = {
  blockDescriptionData1: PropTypes.object.isRequired,
  blockDescriptionData2: PropTypes.object.isRequired,
  blockDescriptionData3: PropTypes.object.isRequired,
  blockDescriptionData4: PropTypes.object.isRequired,
};

export default withTracker(() => {
  const blockDescriptionData1 = {
    titleValue: 17, subValue: '$35,210.43', desc: 'TOTAL REVENUE', icon: 'up', color: 'green',
  };
  const blockDescriptionData2 = {
    titleValue: 0, subValue: '$10,390.90', desc: 'TOTAL COST', icon: 'left', color: 'yellow',
  };
  const blockDescriptionData3 = {
    titleValue: 20, subValue: '$24,813.53', desc: 'TOTAL PROFIT', icon: 'up', color: 'green',
  };
  const blockDescriptionData4 = {
    titleValue: 18, subValue: '1200', desc: 'GOAL COMPLETIONS', icon: 'down', color: 'red',
  };

  return {
    blockDescriptionData1,
    blockDescriptionData2,
    blockDescriptionData3,
    blockDescriptionData4,
  };
})(BlockPage);

