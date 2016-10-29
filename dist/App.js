import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Menu from './menu';
import MenuEdit from './containers/menuedit';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Menu}>
            <Route path="/menuedit" component={MenuEdit}/>
        </Route>
    </Router>,
    document.getElementById('container')
)