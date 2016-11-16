import React from 'react';

export default class PersData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fio      : {},
            orgs     : {},
            position : {}
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState(
            {
                fio      : nextProps.fio,
                orgs     : nextProps.orgs,
                position : nextProps.position
            } );
    }
// <div className="col s12 m6">
// <div className="card blue-grey darken-1">
// <div className="card-content white-text">
// <span className="card-title">Персональные данные</span>
// <p>{this.state.fio.val}</p>
// <p>{this.state.orgs.val}</p>
// <i>{this.state.position.val}</i>
// </div>
// </div>
// </div>
    render() {
        return (
            <div className="card-content">
                <div className="row">
                    <div className="col s3 offset-s2">
                        <h5 className="card-title grey-text text-darken-4">{this.state.fio.val}</h5>
                        <p className="medium-small grey-text">ФИО пользователя</p>
                    </div>
                    <div className="col s3 center-align">
                        <h5 className="card-title grey-text text-darken-4">{this.state.orgs.val}</h5>
                        <p className="medium-small grey-text">Организация</p>
                    </div>
                    <div className="col s3 center-align">
                        <h5 className="card-title grey-text text-darken-4">{this.state.position.val}</h5>
                        <p className="medium-small grey-text">Должность</p>
                    </div>
                    <div className="col s1 right-align">
                        <a className="btn-floating activator waves-effect waves-light darken-2 right">
                            <i className="material-icons">contacts</i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
