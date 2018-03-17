/* eslint-disable jsx-a11y/no-href */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
// import Navigation from '../../components/Navigation/Navigation';
import Authenticated from '../../components/Authenticated/Authenticated';
import Public from '../../components/Public/Public';
import Index from '../../pages/Index/Index';
import Documents from '../../pages/Documents/Documents';
import NewDocument from '../../pages/NewDocument/NewDocument';
import ViewDocument from '../../pages/ViewDocument/ViewDocument';
import EditDocument from '../../pages/EditDocument/EditDocument';
import Signup from '../../pages/Signup/Signup';
import Login from '../../pages/Login/Login';
import Logout from '../../pages/Logout/Logout';
import VerifyEmail from '../../pages/VerifyEmail/VerifyEmail';
import RecoverPassword from '../../pages/RecoverPassword/RecoverPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';
import Footer from '../../components/Footer/Footer';
import Terms from '../../pages/Terms/Terms';
import Privacy from '../../pages/Privacy/Privacy';
import ExamplePage from '../../pages/ExamplePage/ExamplePage';
// import VerifyEmailAlert from '../../components/VerifyEmailAlert/VerifyEmailAlert';
import getUserName from '../../../modules/get-user-name';
import Header from '../../components/Header/Header';
import List from '../../pages/Component/List';
import Boxes from '../../pages/Component/Box';
import Table from '../../pages/Component/Table';
import TableData from '../../pages/Component/TableData';
import CarouselSimple from '../../pages/Component/Carousel';
import Breadcrumbs from '../../pages/Component/Breadcrumb';
import Alerts from '../../pages/Component/Alert';
import Callouts from '../../pages/Component/Callout';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { afterLoginPath: null };
    autoBind(this);
  }

  setAfterLoginPath(afterLoginPath) {
    this.setState({ afterLoginPath });
  }

  render() {
    const { props, state, setAfterLoginPath } = this;
    return (
      <Router>
        {!props.loading ? (
          <div className="App">
            {/* props.authenticated ?
              <VerifyEmailAlert
                userId={props.userId}
                emailVerified={props.emailVerified}
                emailAddress={props.emailAddress}
              />
                            : '' */}
            <Header {...props} {...state} />
            { /* <Navigation {...props} {...state} /> */}
            <Grid>
              <Switch>
                <Route exact name="index" path="/" component={Index} />
                <Authenticated exact path="/documents" component={Documents} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
                <Authenticated exact path="/documents/new" component={NewDocument} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
                <Authenticated exact path="/documents/:_id" component={ViewDocument} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
                <Authenticated exact path="/documents/:_id/edit" component={EditDocument} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
                <Authenticated exact path="/profile" component={Profile} setAfterLoginPath={setAfterLoginPath} {...props} {...state} />
                <Public path="/signup" component={Signup} {...props} {...state} />
                <Public path="/login" component={Login} {...props} {...state} />
                <Route path="/logout" render={routeProps => <Logout {...routeProps} setAfterLoginPath={setAfterLoginPath} />} {...props} {...state} />
                <Route name="verify-email" path="/verify-email/:token" component={VerifyEmail} />
                <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
                <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
                <Route name="terms" path="/terms" component={Terms} />
                <Route name="privacy" path="/privacy" component={Privacy} />
                <Route name="examplePage" path="/example-page" component={ExamplePage} />

                <Route name="list" path="/componentList" component={List} />
                <Route name="box" path="/componentBox" component={Boxes} />
                <Route name="table" path="/componentTable" component={Table} />
                <Route name="tableData" path="/componentTableData" component={TableData} />
                <Route name="carousel" path="/componentcarousel" component={CarouselSimple} />
                <Route name="breadcrumb" path="/componentBreadcrumb" component={Breadcrumbs} />
                <Route name="alert" path="/componentAlert" component={Alerts} />
                <Route name="callout" path="/componentCallout" component={Callouts} />

                <Route component={NotFound} />
              </Switch>
            </Grid>
            <Footer />
          </div>
        ) : ''}
      </Router>
    );
  }
}

App.defaultProps = {
  userId: '',
  emailAddress: '',
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  emailAddress: PropTypes.string,
  emailVerified: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  headerSettings: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerActivities: PropTypes.object.isRequired,
};

export default withTracker(() => {
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  const userId = Meteor.userId();
  const loading = !Roles.subscription.ready();
  const name = user && user.profile && user.profile.name && getUserName(user.profile.name);
  const emailAddress = user && user.emails && user.emails[0].address;

  const headerSettings = [{
    title: 'General Settings',
    items: [
      { item: 'Report panel usage', desc: 'Some information about this general settings option' },
      { item: 'Allow mail redirect', desc: 'Other sets of options are available' },
      { item: 'Expose author name in posts', desc: 'Allow the user to show his name in blog posts' }],
  }, {
    title: 'Chat Settings',
    items: [
      { item: 'Show me as online' },
      { item: 'Turn off notifications' },
      { item: 'Delete chat history' }],
  }];

  const headerOptions = [{
    title: 'Layout Options ',
    items: [
      { item: 'Fixed layout', desc: 'Activate the fixed layout. You can\'t use fixed and boxed layouts together' },
      { item: 'Boxed layout', desc: 'Activate the boxed layout' },
      { item: 'Toggle Sidebar', desc: 'Toggle the left sidebar\'s state (open or collapse)' },
      { item: 'Sidebar Expand on Hover', desc: 'Let the sidebar mini expand on hover' },
      { item: 'Toggle Right Sidebar Slide', desc: 'Toggle between slide over content and push content effects' },
      { item: 'Toggle Right Sidebar Skin', desc: 'Toggle between dark and light skins for the right sidebar' }],
  }];

  const headerActivities = {
    activities: [
      {
        icon: 'fa-birthday-cake', bg: 'red', title: 'Langdon\' Birthday', sub: 'Will be 23 on April 24th',
      },
      {
        icon: 'fa-user', bg: 'yellow', title: 'Frodo Updated His Profile', sub: 'New phone +1(800)555-1234',
      },
      {
        icon: 'fa-envelope-o', bg: 'light-blue', title: 'Nora Joined Mailing List', sub: 'nora@example.com',
      },
      {
        icon: 'fa-file-code-o', bg: 'green', title: 'Cron Job 254 Executed', sub: 'Execution time 5 seconds',
      },
    ],
    tasks: [
      {
        bg: 'danger', title: 'Custom Template Design', value: 70,
      },
      {
        bg: 'success', title: 'Update Resume', value: 95,
      },
      {
        bg: 'warning', title: 'Laravel Integration', value: 50,
      },
      {
        bg: 'primary', title: 'Back End Framework', value: 68,
      },
    ],
  };

  const userProfile = {
    avatar: 'dist/img/user2-160x160.jpg',
    fullName: 'Alexander Pierce',
    loggedIn: true,
  };

  return {
    loading,
    loggingIn,
    authenticated: !loggingIn && !!userId,
    name: name || emailAddress,
    roles: !loading && Roles.getRolesForUser(userId),
    userId,
    emailAddress,
    emailVerified: user && user.emails ? user && user.emails && user.emails[0].verified : true,
    headerSettings,
    headerOptions,
    headerActivities,
    userProfile,
  };
})(App);
