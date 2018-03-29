import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import Alert from '../../../components/AdminLTE/Alert/Alert';
import Callout from '../../../components/AdminLTE/Alert/Callout';

const PageAlert = props => (
  <section>
    { /*  Main content */ }
    <div className="row">
      <div className="col-md-6">
        <div className="box box-default">
          <div className="box-header with-border">
            <i className="fa fa-warning" />

            <h3 className="box-title">Alerts</h3>
          </div>
          { /* /.box-header */ }
          <div className="box-body">
            <Alert style={props.alertData1.style} icon={props.alertData1.icon} title={props.alertData1.title} desc={props.alertData1.desc} />
            <Alert style={props.alertData2.style} icon={props.alertData2.icon} title={props.alertData2.title} desc={props.alertData2.desc} />
            <Alert style={props.alertData3.style} icon={props.alertData3.icon} title={props.alertData3.title} desc={props.alertData3.desc} />
            <Alert style={props.alertData4.style} icon={props.alertData4.icon} title={props.alertData4.title} desc={props.alertData4.desc} />
          </div>
          { /* /.box-body */ }
        </div>
        { /* /.box */ }
      </div>
      { /* /.col */ }

      <div className="col-md-6">
        <div className="box box-default">
          <div className="box-header with-border">
            <i className="fa fa-bullhorn" />

            <h3 className="box-title">Callouts</h3>
          </div>
          { /* /.box-header */ }
          <div className="box-body">
            <Callout style={props.calloutData1.style} title={props.calloutData1.title} desc={props.calloutData1.desc} />
            <Callout style={props.calloutData2.style} title={props.calloutData2.title} desc={props.calloutData2.desc} />
            <Callout style={props.calloutData3.style} title={props.calloutData3.title} desc={props.calloutData3.desc} />
            <Callout style={props.calloutData4.style} title={props.calloutData4.title} desc={props.calloutData4.desc} />
          </div>
          { /* /.box-body */ }
        </div>
        { /* /.box */ }
      </div>
      { /* /.col */ }
    </div>
  </section>
);

PageAlert.defaultProps = {
};

PageAlert.propTypes = {
  alertData1: PropTypes.object.isRequired,
  alertData2: PropTypes.object.isRequired,
  alertData3: PropTypes.object.isRequired,
  alertData4: PropTypes.object.isRequired,

  calloutData1: PropTypes.object.isRequired,
  calloutData2: PropTypes.object.isRequired,
  calloutData3: PropTypes.object.isRequired,
  calloutData4: PropTypes.object.isRequired,
};

export default withTracker(() => {
  const alertData1 = {
    style: 'danger', icon: 'fa-ban', title: 'Alert!', desc: 'Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
  };
  const alertData2 = {
    style: 'info', icon: 'fa-info', title: 'Alert!', desc: 'Info alert preview. This alert is dismissable.',
  };
  const alertData3 = {
    style: 'warning', icon: 'fa-warning', title: 'Alert!', desc: 'Warning alert preview. This alert is dismissable.',
  };
  const alertData4 = {
    style: 'success', icon: 'fa-check', title: 'Alert!', desc: 'Success alert preview. This alert is dismissable.',
  };

  const calloutData1 = {
    style: 'danger', title: 'I am a danger callout!', desc: 'There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.',
  };
  const calloutData2 = {
    style: 'info', title: 'I am an info callout!', desc: 'Follow the steps to continue to payment.',
  };
  const calloutData3 = {
    style: 'warning', title: 'I am a warning callout!', desc: 'This is a yellow callout.',
  };
  const calloutData4 = {
    style: 'success', title: 'I am a success callout!', desc: 'This is a green callout.',
  };


  return {
    alertData1,
    alertData2,
    alertData3,
    alertData4,

    calloutData1,
    calloutData2,
    calloutData3,
    calloutData4,
  };
})(PageAlert);
