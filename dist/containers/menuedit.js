import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class MenuEdit extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    ptitleChange(){
        alert();
    }

    getMenuItems() {
        return (
            <ul className="collapsible popout commentList" data-collapsible="accordion">
                {this.getMenuDetails()}
            </ul>
        )
    }

    getEditForm(obj){
        return(
            <div className="row incollapse">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <input placeholder="Наименование"
                                   onChange={()=> this.ptitleChange()}
                                   type="text"
                                   defaultValue={obj.ptitle}
                                   autoFocus="autoFocus"/>
                            <label className="active">Наименование</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Путь" type="text" defaultValue={obj.apiurl}/>
                            <label className="active">Путь</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Родительский элемент" type="text" defaultValue={obj.parentid}/>
                            <label htmlFor="apiurl" className="active">Родительский элемент</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2">
                            <input placeholder="Порядок" type="text" defaultValue={obj.orderby} autoFocus="autoFocus"/>
                            <label className="active">Порядок</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Роли" type="text" defaultValue={obj.rolenames}/>
                            <label className="active">Роли</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Иконка" type="text" defaultValue={obj.icon}/>
                            <label className="active">Иконка</label>
                        </div>
                        <div className="input-field col s2">
                            <a className="waves-effect waves-light btn"><i className="material-icons left">done</i>СОХРАНИТЬ</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    getMenuDetails() {
        return this.state.data.map((o) =>
            <li key={o.id}>
                <div className="collapsible-header">
                    <div className="row center">
                        <div className="col s2">{o.id}</div>
                        <div className="col s2">{o.ptitle}</div>
                        <div className="col s1">{o.parentid}</div>
                        <div className="col s3">{o.apiurl}</div>
                        <div className="col s1">{o.orderby}</div>
                        <div className="col s2">{o.rolenames}</div>
                        <div className="col s1 center" ><i className="material-icons">{o.icon}</i></div>
                    </div>
                </div>
                <div className="collapsible-body">
                    {this.getEditForm(o)}
                </div>
            </li>
        )
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
                {this.getMenuItems()}
            </div>
        );
    }
};