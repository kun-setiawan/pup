import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import BoxSmall from '../../components/Box/BoxSmall';
import BoxInfo from '../../components/Box/BoxInfo';
import BoxInfoProgress from '../../components/Box/BoxInfoProgress';
import BoxRemovable from '../../components/Box/BoxRemovable';
import BoxCollapsable from '../../components/Box/BoxCollapsable';
import BoxExpandable from '../../components/Box/BoxExpandable';
import BoxLoading from '../../components/Box/BoxLoading';

const Box = props => (
  <section>
    { /*  Main content */ }
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          title={props.boxInfoData1.title}
          value={props.boxInfoData1.value}
          color={props.boxInfoData1.color}
          icon={props.boxInfoData1.icon}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          title={props.boxInfoData2.title}
          value={props.boxInfoData2.value}
          color={props.boxInfoData2.color}
          icon={props.boxInfoData2.icon}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          title={props.boxInfoData3.title}
          value={props.boxInfoData3.value}
          color={props.boxInfoData3.color}
          icon={props.boxInfoData3.icon}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfo
          title={props.boxInfoData4.title}
          value={props.boxInfoData4.value}
          color={props.boxInfoData4.color}
          icon={props.boxInfoData4.icon}
        />
      </div>
    </div>

    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfoProgress
          title={props.boxInfoProgressData1.title}
          value={props.boxInfoProgressData1.value}
          color={props.boxInfoProgressData1.color}
          icon={props.boxInfoProgressData1.icon}
          progress={props.boxInfoProgressData1.progress}
          limit={props.boxInfoProgressData1.limit}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfoProgress
          title={props.boxInfoProgressData2.title}
          value={props.boxInfoProgressData2.value}
          color={props.boxInfoProgressData2.color}
          icon={props.boxInfoProgressData2.icon}
          progress={props.boxInfoProgressData2.progress}
          limit={props.boxInfoProgressData2.limit}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfoProgress
          title={props.boxInfoProgressData3.title}
          value={props.boxInfoProgressData3.value}
          color={props.boxInfoProgressData3.color}
          icon={props.boxInfoProgressData3.icon}
          progress={props.boxInfoProgressData3.progress}
          limit={props.boxInfoProgressData3.limit}
        />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxInfoProgress
          title={props.boxInfoProgressData4.title}
          value={props.boxInfoProgressData4.value}
          color={props.boxInfoProgressData4.color}
          icon={props.boxInfoProgressData4.icon}
          progress={props.boxInfoProgressData4.progress}
          limit={props.boxInfoProgressData4.limit}
        />
      </div>
    </div>

    <div className="row">
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
        <BoxExpandable title={props.boxExpandableData.title} desc={props.boxExpandableData.desc} />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxCollapsable title={props.boxCollapsableData.title} desc={props.boxCollapsableData.desc} style={props.boxCollapsableData.style} />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxRemovable title={props.boxRemovableData.title} desc={props.boxRemovableData.desc} style={props.boxRemovableData.style} />
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12">
        <BoxLoading title={props.boxLoadingData.title} desc={props.boxLoadingData.desc} style={props.boxLoadingData.style} />
      </div>
    </div>
  </section>
);

Box.defaultProps = {
};

Box.propTypes = {
  boxInfoData1: PropTypes.object.isRequired,
  boxInfoData2: PropTypes.object.isRequired,
  boxInfoData3: PropTypes.object.isRequired,
  boxInfoData4: PropTypes.object.isRequired,

  boxInfoProgressData1: PropTypes.object.isRequired,
  boxInfoProgressData2: PropTypes.object.isRequired,
  boxInfoProgressData3: PropTypes.object.isRequired,
  boxInfoProgressData4: PropTypes.object.isRequired,

  boxExpandableData: PropTypes.object.isRequired,
  boxCollapsableData: PropTypes.object.isRequired,
  boxRemovableData: PropTypes.object.isRequired,
  boxLoadingData: PropTypes.object.isRequired,
};

export default withTracker(() => {
  const boxInfoData1 = {
    title: 'Messages', value: 1410, color: 'aqua', icon: 'envelope-o',
  };
  const boxInfoData2 = {
    title: 'Bookmarks', value: 410, color: 'green', icon: 'flag-o',
  };
  const boxInfoData3 = {
    title: 'Uploads', value: 13648, color: 'yellow', icon: 'files-o',
  };
  const boxInfoData4 = {
    title: 'Likes', value: 93139, color: 'aqua', icon: 'star-o',
  };

  const boxInfoProgressData1 = {
    title: 'Messages', value: 1410, color: 'aqua', icon: 'bookmark-o', progress: 70, limit: '30 Days',
  };
  const boxInfoProgressData2 = {
    title: 'Messages', value: 1410, color: 'green', icon: 'thumbs-o-up', progress: 70, limit: '30 Days',
  };
  const boxInfoProgressData3 = {
    title: 'Messages', value: 1410, color: 'yellow', icon: 'calendar', progress: 70, limit: '30 Days',
  };
  const boxInfoProgressData4 = {
    title: 'Messages', value: 1410, color: 'red', icon: 'comments-o', progress: 70, limit: '30 Days',
  };

  const boxExpandableData = {
    title: 'Expandable', desc: 'The body of the box',
  };
  const boxCollapsableData = {
    title: 'Collapsable', desc: 'The body of the box', style: 'box-warning',
  };
  const boxRemovableData = {
    title: 'Removable', desc: 'The body of the box', style: 'box-success',
  };
  const boxLoadingData = {
    title: 'Loading state', desc: 'The body of the box', style: 'box-danger',
  };

  return {
    boxInfoData1,
    boxInfoData2,
    boxInfoData3,
    boxInfoData4,

    boxInfoProgressData1,
    boxInfoProgressData2,
    boxInfoProgressData3,
    boxInfoProgressData4,

    boxExpandableData,
    boxCollapsableData,
    boxRemovableData,
    boxLoadingData,
  };
})(Box);
