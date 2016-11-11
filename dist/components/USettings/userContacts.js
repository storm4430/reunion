import React from 'react';

export default class UserContacts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mail: [],
            tel: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                mail : nextProps.mail,
                tel  : nextProps.tel
            } );
    }

    showMails(){
        return(
            this.state.mail.map(i =>  { return (
                <p key={i.id}>{i.val}</p>
            )
            })
        )
    }

    showTels(){
        return(
            this.state.tel.map(i =>  { return (
                <p key={i.id}>{i.val}</p>
            )
            })
        )
    }

    render() {
        return (
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Контакты</span>
                        { this.showMails() }
                        { this.showTels() }
                    </div>
                </div>
            </div>
        )
    }
}

