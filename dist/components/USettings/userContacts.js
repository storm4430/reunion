import React from 'react';
import ReactDOM from 'react-dom';
import Api from './../../APIFactory';

import ModalConfirmation from './ModalConfirmation';
import NewContact from './NewContact';

export default class UserContacts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mail     : [],
            tel      : [],
            fio      : {},
            position : {},
        };
        this.api = new Api();
        this.addNewContact = this.addNewContact.bind(this);
        this.getConfirmationWindow = this.getConfirmationWindow.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                mail     : nextProps.data.mail,
                tel      : nextProps.data.tel,
                fio      : nextProps.data.fio,
                position : nextProps.data.position
            } );
    }

    getConfirmationWindow(event){
        event.preventDefault();
        let t = event.currentTarget.dataset.storage;

        let s = ( event.currentTarget.dataset.tip === 'mail')
            ? $.grep(this.state.mail, (e) => { return e.id == t })
            : $.grep(this.state.tel, (e) => { return e.id == t });
        console.log('object is ',s)
        ReactDOM.render(
            <ModalConfirmation contact={ s[0] } tip={ event.currentTarget.dataset.tip }/>,
            document.getElementById('modalWindow')
        );

        $('#modalWindow').modal('open');
    }

    showMails(){
        return(
            this.state.mail.map(i =>  { return (
                <div className="row" key={i.id}>
                    <div className="col s1">
                        <a href="#" onClick={this.getConfirmationWindow} data-storage={ i.id } data-tip="mail"><i className={(i.verified === true)? "material-icons green-text": "material-icons red-text"}>email</i></a>
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
                        <a href="#" onClick={this.getConfirmationWindow} data-storage={ i.id }  data-tip="tel"><i className={(i.verified === true)? "material-icons green-text": "material-icons red-text"}>contact_phone</i></a>
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

    postNewContact(obj) {
        let api = new Api();
        (obj.selected == 'email')
            ?  api.post('/email', obj, null)
            :  api.post('/phone', obj, null)
    }

    addNewContact(event) {
        event.preventDefault();
        ReactDOM.render(
            <NewContact onAddNewContact={ this.postNewContact }/>,
            document.getElementById('modalWindow')
        );

        $('#modalWindow').modal('open');
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