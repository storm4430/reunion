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
                <div className="row" key={i.id}>
                    <div className="col s1">
                        <a href="#modal1"><i className={(i.verified === true)? "material-icons green-text": "material-icons red-text"}>email</i></a>
                    </div>
                    <div className="col s4">
                        {i.val}
                    </div>
                    <div className="col s2">
                        {i.verified}
                    </div>
                    <div className="col s2 white-text">
                        <input type="checkbox" id={"mail" + i.id} disabled={(i.verified === true)? "": "disabled"} />
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
                    <a href="#modal1"><i className={(i.verified === true)? "material-icons green-text": "material-icons red-text"}>contact_phone</i></a>
                </div>
                <div className="col s4">
                    {i.val}
                </div>
                <div className="col s2">
                    {i.verified}
                </div>
                <div className="col s2 white-text">
                    <input type="checkbox" id={"tel" + i.id} disabled={(i.verified === true)? "": "disabled"} />
                    <label htmlFor={"tel" + i.id}>Уведомления</label>
                </div>
            </div>
            )
            })
        )
    }

    componentDidMount() {
        $('.modal').modal();
    }

    render() {
        return (
            <div>
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Контакты</span>
                            { this.showMails() }
                            { this.showTels() }
                        </div>
                    </div>
                </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}

