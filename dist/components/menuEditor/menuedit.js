import React, { Component } from 'react';
import Api from '../../APIFactory';
import { Link } from 'react-router';

import MenuItem from './menuitem';
import NewMenuItem from './addmenuitem';

export default class MenuEdit extends React.Component{
    constructor() {
        super();
        this.state = {
            data: [],
            roles:[]
        };
        this.url = new Api();
    }

    loadDocsFromServer() {
        $('#pl').html(`<div class="progress green">
                            <div class="indeterminate red">
                            </div>
                       </div>`);
        this.url.get(`/menusel`, null)
            .then(res => {
                const data = res;
                this.setState({ data });
                $('#pl').empty();
            });

        this.url.get(`/roles`, null)
            .then(res => {
                let roles = res;
                this.setState({ roles });
            });
    }

    fillMenu(){
        return this.state.data.map(i =>
            (
                <MenuItem item={i} key={i.id} roles={this.state.roles}/>
        ))
    }

    componentDidMount() {
        this.loadDocsFromServer();
        $('.button-collapse').sideNav('hide');
        $('.modal').modal();
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
                                <div className="col s1 center">id</div>
                                <div className="col s2 center">Наименование</div>
                                <div className="col s1 center">Родитель</div>
                                <div className="col s1 center">Сcылка</div>
                                <div className="col s1 center">Порядок</div>
                                <div className="col s5 center">Роли</div>
                                <div className="col s1">Иконка</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="collapsible popout commentList" data-collapsible="accordion">
                    {this.fillMenu()}
                </ul>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red waves-effect modal-trigger"
                        href="#modal1">
                        <i className="material-icons">playlist_add</i>
                    </a>
                </div>
                <div id="modal1" className="modal bottom-sheet">
                    <div className="modal-content">
                        <NewMenuItem />
                    </div>
                    <div className="modal-footer">
                        <a href="#menuedit" className="modal-action modal-close waves-effect waves-green btn-flat">Закрыть</a>
                    </div>
                </div>
            </div>

        );
    }
};