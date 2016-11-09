import React from 'react';
import axios from 'axios';

import UserPic from './userpic';

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
                console.log(this.state.usettings);
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

    render() {
        return (
           <UserPic image={this.state.usettings.img} />
        )
    }
}