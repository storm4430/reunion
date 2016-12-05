import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';


import Menu from './components/menu/menu';
import MenuEdit from './components/menuEditor/menuedit';
import UserSettings from './components/USettings/usettingsView';
import DashBoard from './components/DashBoard/dashboard';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Menu}>
            <Route path="/dashboard" component={DashBoard}/>
            <Route path="/menuedit" component={MenuEdit}/>
            <Route path="/usersettings" component={UserSettings}/>
        </Route>

    </Router>,
    document.getElementById('container')
);