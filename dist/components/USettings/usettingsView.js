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
        const styles = {
            display: 'none',
            transform: 'translateY(0 + px)'
        };
        return (
            <div id="profile-page-header" className="card">
                <UserBackground image={this.state.usettings.backimg} />
                <UserPic image={ this.state.usettings.img }/>
                <PersData fio={this.state.usettings.fio} orgs={this.state.usettings.orgs} position={this.state.usettings.position}/>
                <div className="card-reveal" style={styles}>
                    <p>
                        <span className="card-title grey-text text-darken-4">Roger Waters <i className="mdi-navigation-close right"></i></span>
                        <span><i className="mdi-action-perm-identity cyan-text text-darken-2"></i> Project Manager</span>
                    </p>

                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>

                    <p><i className="mdi-action-perm-phone-msg cyan-text text-darken-2"></i> +1 (612) 222 8989</p>
                    <p><i className="mdi-communication-email cyan-text text-darken-2"></i> mail@domain.com</p>
                    <p><i className="mdi-social-cake cyan-text text-darken-2"></i> 18th June 1990</p>
                    <p><i className="mdi-device-airplanemode-on cyan-text text-darken-2"></i> BAR - AUS</p>
                </div>
            </div>
        )
    }
}