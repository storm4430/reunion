/**
 * Created by codse on 19.11.2016.
 */
import React from 'react';

export default  class ModalConfirmation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userSettings : {},
            typeMod : null
        }
    }

    // componentDidMount() {
    //
    // }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userSettings : nextProps.data,
            typeMod      : nextProps.tip
        });
    }

    render() {
        console.log( 'value', this.state.userSettings[0]);
        return (
            <div>
                <div className="modal-content">
                    <h4>{ this.state.userSettings.val}</h4>
                    <p>Подтверждение</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Закрыть</a>
                </div>
            </div>
        )
    }
}