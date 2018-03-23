import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App/App';
import '../both/api';

import '../../ui/stylesheets/app.scss';
import { loadScript, loadStyle } from '../../modules/load-script';

Meteor.startup(() => render(<App />, document.getElementById('react-root')));

const libPath = '';
// const libPath = 'http://ec2-54-173-3-232.compute-1.amazonaws.com:3000';

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
loadScript(`${libPath}/dist/js/adminlte.min.js`, 'body');
