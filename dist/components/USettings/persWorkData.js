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

    render() {
        return (
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Персональные данные</span>
                        <p>{this.state.fio.val}</p>
                        <p>{this.state.orgs.val}</p>
                        <i>{this.state.position.val}</i>
                    </div>
                </div>
            </div>
        )
    }
}
