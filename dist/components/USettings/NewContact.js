import React from 'react';

export default  class NewContact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            eventNewContact : this.props.onAddNewContact,
            email: '',
            phone: '',
            selected: 'email'
        };
        this.addNewMail = this.addNewMail.bind(this);
        this.addNewPhone = this.addNewPhone.bind(this);
        this.changeView = this.changeView.bind(this);
        this.saveContact = this.saveContact.bind(this);
    }

    componentWillReceiveProps(nextProps) {

    }

    changeView() {
        (this.state.selected == 'email')
            ? this.setState({ selected:'tel'})
            : this.setState({ selected:'email'})
    }

    addNewMail(event){
        this.setState({ email: event.target.value})
    }

    addNewPhone(event){
        this.setState({ phone: event.target.value})
    }

    saveContact() {
        this.state.eventNewContact(this.state)
    }

    render() {
        return (
            <div>
                <div className="modal-content">
                    <div className="row">
                        <div className="col s12">
                            <div className="card-panel red center">
                                      <span className="white-text">
                                          После добавления нового контакта необходимо выполнить процедуру подтверждения
                                      </span>
                            </div>
                            <div className="switch center">
                                <label>
                                        Email
                                    <input type="checkbox" onChange={ this.changeView }/>
                                        <span className="lever"></span>
                                       Телефон
                                </label>
                            </div>
                            { (this.state.selected == 'email')
                                ?
                                (
                                    <div className="col s12">
                                        <div className="input-field col s12">
                                            <input id="newEmail" type="email" className="validate"
                                                   value={ this.state.email } onChange={ this.addNewMail }/>
                                            <label htmlFor="newEmail" data-error="Неправильно указан адрес"
                                                   data-success="Адрес указан правильно">Введите адрес электронной
                                                почты</label>
                                        </div>
                                    </div>
                                )
                                :
                                (
                                    <div className="col s12">
                                        <div className="input-field col s12">
                                            <input id="newTel" type="text" className="validate"
                                                   value={ this.state.phone } onChange={ this.addNewPhone } pattern="(\+?\d[- .]*){7,13}"/>
                                            <label htmlFor="newTel" data-error="Неправильно указан телефон"
                                                   data-success="Телефон указан правильно">Введите номер сотового телефона
                                                </label>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat">Закрыть</a>
                    <a className="modal-action waves-effect waves-green btn-flat" onClick={ this.saveContact }>Сохранить</a>
                </div>
            </div>
        )
    }
}
