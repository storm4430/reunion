/**
 * Created by codse on 19.11.2016.
 */
import React from 'react';
import Api from './../../APIFactory';

export default  class ModalConfirmation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userSettings    : this.props.contact,
            typeMod         : this.props.tip,
            codeSended      : false,
            confirmSuccess  : true
        };
        this.api = new Api();
        this.sendSMSConfirmation = this.sendSMSConfirmation.bind(this);
        this.sendEmailConfirmation = this.sendEmailConfirmation.bind(this);
    }

    // componentDidMount() {
    //
    // }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userSettings    : nextProps.contact,
            typeMod         : nextProps.tip,
            codeSended      : false,
            confirmSuccess  : true
        });
    }

    sendSMSConfirmation(){

    }

    sendEmailConfirmation() {
        this.setState({ codeSended : true});
        let t = this.api.put('/email2main?id=' + this.state.userSettings.id, null,
            () => {
                this.setState({ confirmSuccess: false})
            }, null);
        console.log('error = ', t);
    }

    render() {
        let visibilityStyle =
            {
                visible:{
                    visibility : 'visible'
                },
                unvisible:{
                    visibility : 'hidden'
                }
            };
        return ( this.state.userSettings.verified == true)
            ?(
                <div>
                    <div className="modal-content">
                        <div className="row">
                            <div className="col s12">
                                <div className="card-panel teal center">
                                      <span className="white-text">
                                          {
                                              (this.state.typeMod == 'tel')
                                              ? 'Ваш телефон: ' + this.state.userSettings.val + ', подтверждён'
                                              : 'Ваш адрес электронной почты: ' + this.state.userSettings.val + ', подтверждён'
                                          }
                                      </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat">Закрыть</a>
                    </div>
                </div>
        ):
            (
                <div>
                    <div className="modal-content">
                        <div className="row">
                            <div className="col s12">
                                <div className="card-panel red center">
                                      <span className="white-text">
                                          {
                                              (this.state.typeMod == 'tel')
                                              ? 'Ваш телефон: ' + this.state.userSettings.val + ', не подтверждён'
                                              : 'Ваш адрес электронной почты: ' + this.state.userSettings.val + ', не подтверждён'
                                          }
                                      </span>
                                </div>
                                {
                                    (this.state.typeMod == 'tel')
                                        ? (
                                            <div className="center">
                                                <button style={ (this.state.codeSended === false)? visibilityStyle.visible: visibilityStyle.unvisible } className="waves-effect waves-green btn-flat" onClick={ this.sendSMSConfirmation }> Отправить код подтверждения на телефон</button>
                                                <input />
                                            </div>
                                          )
                                        : (
                                            <div className="center">
                                                <button style={ (this.state.codeSended === false)? visibilityStyle.visible: visibilityStyle.unvisible } className="waves-effect waves-green btn-flat" onClick={ this.sendEmailConfirmation }> Подтвердить</button>
                                                <p hidden={ (this.state.codeSended === true)? '':'hidden' }>Инструкция по подтверждению адреса электронной почты от правлена на { this.state.userSettings.val }</p>
                                                <p hidden={ (this.state.confirmSuccess === false)? '':'hidden' }>Что то пошло не так</p>
                                            </div>
                                           )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat">Закрыть</a>
                    </div>
                </div>
            )
    }
}