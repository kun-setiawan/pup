import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from '../../ui/layouts/App/App';
import '../both/api';

import '../../ui/stylesheets/app.scss';

// import '../../../public/bower_components/bootstrap/dist/css/bootstrap.min.css';
// import '../../../public/bower_components/font-awesome/css/font-awesome.min.css';
// import '../../../public/bower_components/Ionicons/css/ionicons.min.css';
// import '../../../public/dist/css/AdminLTE.min.css';
//
// import '../../../public/dist/css/skins/_all-skins.min.css';
// import '../../../public/bower_components/morris.js/morris.css';
// import '../../../public/bower_components/jvectormap/jquery-jvectormap.css';
// import '../../../public/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
// import '../../../public/bower_components/bootstrap-daterangepicker/daterangepicker.css';
// import '../../../public/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';
//
// import '../../../public/bower_components/jquery/dist/jquery.min.js';
// import '../../../public/bower_components/bootstrap/dist/js/bootstrap.min.js';
// import '../../../public/dist/js/adminlte.min';

Meteor.startup(() => render(<App />, document.getElementById('react-root')));
