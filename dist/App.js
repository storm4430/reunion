import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';


import Menu from './components/menu/menu';
import MenuEdit from './components/menuEditor/menuedit';
import UserSettings from './components/USettings/usettingsView';
import DashBoard from './components/DashBoard/dashboard';
import Office from './components/office/office';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ Menu }>
            <Route path="/dashboard" component={ DashBoard }/>
            <Route path="/menuedit" component={ MenuEdit }/>
            <Route path="/usersettings" component={ UserSettings }/>
            <Route path="/office" component={ Office }/>
        </Route>

    </Router>,
    document.getElementById('container')
);