import React from 'react';
import ModalConfirmation from './ModalConfirmation';

export default class UserContacts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mail     : [],
            tel      : [],
            fio      : {},
            position : {}
        };
        this.addNewContact = this.addNewContact.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                mail     : nextProps.data.mail,
                tel      : nextProps.data.tel,
                fio      : nextProps.data.fio,
                position : nextProps.data.position
            } );
        $('.modal').modal();
    }

    showMails(){
        return(
            this.state.mail.map(i =>  { return (
                <div className="row" key={i.id}>
                    <div className="col s1">
                        <a href={"#mailmodal" + i.id}><i className={(i.verified === true)? "material-icons green-text": "material-icons red-text"}>email</i></a>
                    </div>
                    <div className="col s2">
                        {i.val}
                    </div>
                    <div className="col s2">
                        {i.verified}
                    </div>
                    <div className="col s2 white-text">
                        <input type="checkbox" id={"mail" + i.id} disabled={(i.verified === true)? "": "disabled"} checked={(i.def === true)? "checked": ""} />
                        <label htmlFor={"mail" + i.id}>Уведомления</label>
                    </div>

                </div>
            )
            })
        )
    }

    showTels(){
        return(
            this.state.tel.map(i =>  { return (
                <div className="row" key={i.id}>
                    <div className="col s1">
                        <a href={"#telmodal" + i.id}><i className={(i.verified === true)? "material-icons green-text": "material-icons red-text"}>contact_phone</i></a>
                    </div>
                    <div className="col s2">
                        {i.val}
                    </div>
                    <div className="col s2">
                        {i.verified}
                    </div>
                    <div className="col s2 white-text">
                        <input type="checkbox" id={"tel" + i.id} disabled={(i.verified === true)? "": "disabled"} checked={(i.def === true)? "checked": ""}/>
                        <label htmlFor={"tel" + i.id}>Уведомления</label>
                    </div>
                </div>
            )
            })
        )
    }

    addNewContact(event) {
        event.preventDefault();
    }

    componentDidMount() {
        $('.modal').modal();
    }

    render() {
        const styles = {
            display: 'none',
            transform: 'translateY(0 + px)'
        };
        return (
            <div className="card-reveal" style={styles}>
                <p>
                    <span className="card-title grey-text text-darken-4">{ this.state.fio.val }
                        <i className="material-icons right">done</i>
                    </span>
                    <span><i className="material-icons cyan-text text-darken-2">perm_identity</i> { this.state.position.val } </span>
                </p>
                { this.showTels() }
                { this.showMails() }
                <span>
                    <a className="btn-floating btn-small waves-effect waves-light red right" onClick={ this.addNewContact }><i className="material-icons">playlist_add</i></a>
                </span>
            </div>
        )
    }
}

// //