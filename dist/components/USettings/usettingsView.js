import React from 'react';
import axios from 'axios';

import UserPic from './userpic';
import UserBackground from './backgound';
import PersData from './persWorkData';
import UserContacts from './userContacts';

export default class UserSettings extends React.Component {
    constructor() {
        super();
        this.state =  {
            usettings: {}
        }
    }

    getUserSettings() {
        axios.get('http://193.124.178.232:100/wbp/settings')
            .then(res => {
                const usettings = res.data;
                this.setState({ usettings });
                $('#pl').empty();
            })
            .catch(error => {
                Materialize.toast(error.message, 3000, 'rounded red')
            });
    }

    componentDidMount() {
       this.getUserSettings();
        $('.button-collapse').sideNav('hide');
    }
// <div>
// <div className="row">
// <UserPic image={this.state.usettings.img} />
// <UserBackground image={this.state.usettings.backimg} />
// </div>
// <div className="row">
// <PersData fio={this.state.usettings.fio} orgs={this.state.usettings.orgs} position={this.state.usettings.position}/>
// <UserContacts mail={this.state.usettings.mail} tel={this.state.usettings.tel} />
// </div>
// <div className="row">
//
// </div>
// </div>

    render() {
        return (
            <div id="profile-page-header" className="card">
                <UserBackground image={this.state.usettings.backimg} />
                <UserPic image={ this.state.usettings.img }/>
                <PersData fio={ this.state.usettings.fio } orgs={ this.state.usettings.orgs } position={ this.state.usettings.position } />
                <UserContacts data={ this.state.usettings }/>
            </div>
        )
    }
}