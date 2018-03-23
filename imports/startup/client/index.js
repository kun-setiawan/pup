import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App/App';
import '../both/api';

import '../../ui/stylesheets/app.scss';
import { loadScript, loadStyle } from '../../modules/load-script';

Meteor.startup(() => render(<App />, document.getElementById('react-root')));

// const libPath = '';
const libPath = 'http://ec2-54-173-3-232.compute-1.amazonaws.com:3000';

loadScript(`${libPath}/bower_components/jquery/dist/jquery.min.js`, 'body');
loadScript(`${libPath}/dist/js/adminlte.min.js`, 'body');
