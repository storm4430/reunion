import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

import MenuItem from './menuitem';

export default class MenuEdit extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    loadDocsFromServer() {
        $('#pl').html(`<div class="progress green">
                            <div class="indeterminate red">
                            </div>
                       </div>`);
        axios.get(`http://193.124.178.232:100/wbp/menusel`)
            .then(res => {
                const data = res.data;
                this.setState({ data });
                $('#pl').empty();
            })
            .catch(error => {
                Materialize.toast(error.message, 3000, 'rounded red')
            });
    }
    // {/*<MenuItem item={i} />*/}

    fillMenu(){
        return this.state.data.map(i =>
            (
                <MenuItem item={i} key={i.id} />
        ))
    }

    componentDidMount() {
        this.loadDocsFromServer();
        $('.button-collapse').sideNav('hide');
    }

    render() {
        return (
            <div className="TestBox">
                <nav className="indigo darken-3 z-depth-1">
                    <div className="nav-wrapper">
                        <div className="row">
                            <div className="col s7">
                                <Link className="breadcrumb navigate" to="/"> Главная</Link>
                                <Link className="breadcrumb navigate" to="/menuedit"> Настройка меню</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="pl"></div>
                <ul className="collapsible popout">
                    <li>
                        <div className="indigo darken-3 white-text  p-up">
                            <div className="row">
                                <div className="col s2 center">id</div>
                                <div className="col s2 center">Наименование</div>
                                <div className="col s1 center">Родитель</div>
                                <div className="col s3 center">Сcылка</div>
                                <div className="col s1 center">Порядок</div>
                                <div className="col s2 center">Роли</div>
                                <div className="col s1">Иконка!</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="collapsible popout commentList" data-collapsible="accordion">
                    {this.fillMenu()}
                </ul>
            </div>
        );
    }
};