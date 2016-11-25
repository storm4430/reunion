import React from 'react';
import axios from 'axios';
import Api from './../../APIFactory'

import UserPic from './userpic';
import UserBackground from './backgound';
import PersData from './persWorkData';
import UserContacts from './userContacts';
import ModalConfirmation from './ModalConfirmation';

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



        // axios.get('http://193.124.178.232:100/wbp/settings')
        //     .then(res => {
        //         const usettings = res.data;
        //         this.setState({ usettings });
        //         $('#pl').empty();
        //     })
        //     .catch(error => {
        //         Materialize.toast(error.message, 3000, 'rounded red')
        //     });
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
                {
                    this.state.usettings.tel.map(i => { return (
                            <ModalConfirmation data={ i } tip="tel" key={ i.id } />
                        )
                    })
                }
                {
                    this.state.usettings.mail.map(i => {return(
                            <ModalConfirmation data={ i } tip="mail" key={ i.id } />
                        )
                    })
                }
            </div>
        )
    }
}