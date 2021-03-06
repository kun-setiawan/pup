/* eslint-disable jsx-a11y/no-href */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Grid } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import classNames from 'classnames';
// import Navigation from '../../components/Pup/Navigation/Navigation';
import Authenticated from '../../components/Pup/Authenticated/Authenticated';
import Public from '../../components/Pup/Public/Public';
import Index from '../../pages/Pup/Index/Index';
import Documents from '../../pages/Pup/Documents/Documents';
import NewDocument from '../../pages/Pup/NewDocument/NewDocument';
import ViewDocument from '../../pages/Pup/ViewDocument/ViewDocument';
import EditDocument from '../../pages/Pup/EditDocument/EditDocument';
import Signup from '../../pages/Pup/Signup/Signup';
import Login from '../../pages/Pup/Login/Login';
import Logout from '../../pages/Pup/Logout/Logout';
import VerifyEmail from '../../pages/Pup/VerifyEmail/VerifyEmail';
import RecoverPassword from '../../pages/Pup/RecoverPassword/RecoverPassword';
import ResetPassword from '../../pages/Pup/ResetPassword/ResetPassword';
import Profile from '../../pages/Pup/Profile/Profile';
import NotFound from '../../pages/Pup/NotFound/NotFound';
// import Footer from '../../components/Pup/Footer/Footer';
import FooterSimple from '../../components/AdminLTE/Footer/FooterSimple';
import Terms from '../../pages/Pup/Terms/Terms';
import Privacy from '../../pages/Pup/Privacy/Privacy';
import ExamplePage from '../../pages/Pup/ExamplePage/ExamplePage';
// import VerifyEmailAlert from '../../Pup/components/Pup/VerifyEmailAlert/VerifyEmailAlert';
import getUserName from '../../../modules/get-user-name';
import Header from '../../components/AdminLTE/Header/Header';
import BreadcrumbSimple from '../../components/AdminLTE/Breadcrumb/BreadcrumbSimple';
import List from '../../pages/AdminLTE/Component/List';
import Box from '../../pages/AdminLTE/Component/Box';
import Table from '../../pages/AdminLTE/Component/Table';
import TableData from '../../pages/AdminLTE/Component/TableData';
import CarouselSimple from '../../pages/AdminLTE/Component/Carousel';
import Alerts from '../../pages/AdminLTE/Component/Alert';
import Social from '../../pages/AdminLTE/Component/Social';
import Chat from '../../pages/AdminLTE/Component/Chat';
import Block from '../../pages/AdminLTE/Component/Block';

import { loadScript, loadStyle } from '../../../modules/load-script';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { afterLoginPath: null };
    autoBind(this);

    console.log(`!!!!!!!!!! running constructor ${props.loading ? 'true' : 'false'}`);
  }

  componentWillMount() {
    const { props } = this;
    console.log(`!!!!!!!!!! running willmount ${props.loading ? 'true' : 'false'}`);
  }

  componentDidMount() {
    const { props } = this;
    console.log(`!!!!!!!!!! running didmount ${props.loading ? 'true' : 'false'}`);
  }

  componentWillReceiveProps() {
    const { props } = this;
    console.log(`!!!!!!!!!! running componentWillReceiveProps ${props.loading ? 'true' : 'false'}`);
  }

  componentWillUpdate() {
    const { props } = this;
    console.log(`!!!!!!!!!! running componentWillUpdate ${props.loading ? 'true' : 'false'}`);
  }

  componentDidUpdate() {
    const { props } = this;

    // const libPath = '';
    const libPath = 'http://ec2-54-173-3-232.compute-1.amazonaws.com:3000';
    // const libPath = 'https://adminlte.io/themes/AdminLTE/';

    // if (!props.loading) {
    loadStyle(`${libPath}/bower_components/bootstrap/dist/css/bootstrap.min.css`, 'head');
    loadStyle(`${libPath}/bower_components/font-awesome/css/font-awesome.min.css`, 'head');
    loadStyle(`${libPath}/bower_components/Ionicons/css/ionicons.min.css`, 'head');
    loadStyle(`${libPath}/dist/css/AdminLTE.min.css`, 'head');
    loadStyle(`${libPath}/dist/css/skins/_all-skins.min.css`, 'head');
    loadStyle(`${libPath}/bower_components/morris.js/morris.css`, 'head');
    loadStyle(`${libPath}/bower_components/jvectormap/jquery-jvectormap.css`, 'head');
    loadStyle(`${libPath}/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css`, 'head');
    loadStyle(`${libPath}/bower_components/bootstrap-daterangepicker/daterangepicker.css`, 'head');
    loadStyle(`${libPath}/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css`, 'head');
    loadScript('https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js', 'head');
    loadScript('https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js', 'head');
    loadStyle('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic', 'head');

    loadScript(`${libPath}/bower_components/jquery/dist/jquery.min.js`, 'body');
    loadScript(`${libPath}/bower_components/bootstrap/dist/js/bootstrap.min.js`, 'body');
    loadScript(`${libPath}/dist/js/adminlte.min.js`, 'body');
    // }

    console.log(`!!!!!!!!!! running componentDidUpdate ${props.loading ? 'true' : 'false'}`);
  }

  setAfterLoginPath(afterLoginPath) {
    this.setState({ afterLoginPath });
  }

  render() {
    const { props, state, setAfterLoginPath } = this;

    // const libPath = '';
    const libPath = 'http://ec2-54-173-3-232.compute-1.amazonaws.com:3000';
    // const libPath = 'http://localhost:3000';
    // const libPath = 'https://adminlte.io/themes/AdminLTE/';

    // if (!props.loading) {
    loadStyle(`${libPath}/bower_components/bootstrap/dist/css/bootstrap.min.css`, 'head');
    loadStyle(`${libPath}/bower_components/font-awesome/css/font-awesome.min.css`, 'head');
    loadStyle(`${libPath}/bower_components/Ionicons/css/ionicons.min.css`, 'head');
    loadStyle(`${libPath}/dist/css/AdminLTE.min.css`, 'head');
    loadStyle(`${libPath}/dist/css/skins/_all-skins.min.css`, 'head');
    loadStyle(`${libPath}/bower_components/morris.js/morris.css`, 'head');
    loadStyle(`${libPath}/bower_components/jvectormap/jquery-jvectormap.css`, 'head');
    loadStyle(`${libPath}/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css`, 'head');
    loadStyle(`${libPath}/bower_components/bootstrap-daterangepicker/daterangepicker.css`, 'head');
    loadStyle(`${libPath}/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css`, 'head');
    loadScript('https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js', 'head');
    loadScript('https://oss.maxcdn.com/respond/1.4.2/respond.min.js', 'head');
    loadStyle('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic', 'head');

    loadScript(`${libPath}/bower_components/jquery/dist/jquery.min.js`, 'body');
    loadScript(`${libPath}/bower_components/bootstrap/dist/js/bootstrap.min.js`, 'body');
    loadScript(`${libPath}/dist/js/adminlte.min.js`, 'body');
    // }
    console.log(`!!!!!!!!!! running render ${props.loading ? 'true' : 'false'}`);

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
            { /* <Grid> */}
            <div className={classNames({ 'layout-top-nav': !props.authenticated })} >
              <div className="content-wrapper">
                {props.authenticated ? <BreadcrumbSimple /> : '' }
                <section className="content">
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
                    <Route name="box" path="/componentBox" component={Box} />
                    <Route name="table" path="/componentTable" component={Table} />
                    <Route name="tableData" path="/componentTableData" component={TableData} />
                    <Route name="carousel" path="/componentcarousel" component={CarouselSimple} />
                    <Route name="alert" path="/componentAlert" component={Alerts} />
                    <Route name="social" path="/componentSocial" component={Social} />
                    <Route name="chat" path="/componentChat" component={Chat} />
                    <Route name="block" path="/componentBlock" component={Block} />

                    <Route component={NotFound} />
                  </Switch>
                </section>
              </div>
            </div>
            { /* </Grid> */}
            <FooterSimple {...props} {...state} />
          </div>
        ) : '' }
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
    position: 'Web Developer',
    joinDate: 'Nov. 2012',
    loggedIn: true,
  };

  const headerTasks = {
    number: 9,
    items: [
      { title: 'Design some buttons', value: 20, bg: 'aqua' },
      { title: 'Create a nice theme', value: 20, bg: 'green' },
      { title: 'Some task I need to do', value: 20, bg: 'red' },
      { title: 'Make beautiful transitions', value: 20, bg: 'yellow' },
    ],
  };

  const headerNotifications = {
    number: 10,
    items: [
      { title: '5 new members joined today', icon: 'fa-users', bg: 'aqua' },
      { title: 'Very long description here that may not fit into the page and may cause design problems', icon: 'fa-warning', bg: 'yellow' },
      { title: '5 new members joined', icon: 'fa-users', bg: 'red' },
      { title: '25 sales made', icon: 'fa-shopping-cart', bg: 'green' },
      { title: 'You changed your username', icon: 'fa-users', bg: 'red' },
    ],
  };

  const headerMessages = {
    number: 4,
    items: [
      {
        fullName: 'Support Team', avatar: 'dist/img/user2-160x160.jpg', subject: 'Why not buy a new awesome theme?', timePast: '5 mins',
      },
      {
        fullName: 'AdminLTE Design Team', avatar: 'dist/img/user3-128x128.jpg', subject: 'Why not buy a new awesome theme?', timePast: '2 hours',
      },
      {
        fullName: 'Developers', avatar: 'dist/img/user4-128x128.jpg', subject: 'Why not buy a new awesome theme?', timePast: 'Today',
      },
      {
        fullName: 'Sales Department', avatar: 'dist/img/user3-128x128.jpg', subject: 'Why not buy a new awesome theme?', timePast: 'Yesterday',
      },
      {
        fullName: 'Reviewers', avatar: 'dist/img/user4-128x128.jpg', subject: 'Why not buy a new awesome theme?', timePast: '2 days',
      },
    ],
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
    headerTasks,
    headerNotifications,
    headerMessages,
  };
})(App);
