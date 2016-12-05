import React from 'react';
import Api from './../../APIFactory'

import UserPic from './userpic';
import UserBackground from './backgound';
import PersData from './persWorkData';
import UserContacts from './userContacts';

export default class UserSettings extends React.Component {
    constructor() {
        super();
        this.state =  {
            usettings: {
                mail : [],
                tel  : []
            }
        }
        this.api = new Api();

    }

    getUserSettings() {
        this.api.get('/settings', null)
            .then(res => {
                const usettings = res
                this.setState({ usettings });
            })
    }

    componentDidMount() {
        this.getUserSettings();
        $('.button-collapse').sideNav('hide');

    }

    render() {
        return (
            <div id="profile-page-header" className="card">
                <UserBackground image={this.state.usettings.backimg} />
                <UserPic image={ this.state.usettings.img } />
                <PersData fio={ this.state.usettings.fio } orgs={ this.state.usettings.orgs } position={ this.state.usettings.position } />
                <UserContacts data={ this.state.usettings } />

            </div>
        )
    }
}