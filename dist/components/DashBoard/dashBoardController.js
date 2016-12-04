import React from 'react';


export default class DashBoardController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth : props.month,
            currentYear : props.year,
            onInc : props.onInc,
            onDec : props.onDec,
        }
    }

    getCalendar(){

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentMonth : nextProps.month,
            currentYear  : nextProps.year,
            onInc        : nextProps.onInc,
            onDec        : nextProps.onDec,
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col s4">
                    <h4 className="hWithoutamargin"> Месяц: {this.state.currentMonth}, {this.state.currentYear} год </h4>
                </div>
                <div className="col s4 center-align">
                    <h3 className="hWithoutamargin"> Сегодня { new Date().toLocaleDateString() } </h3>
                </div>
                <div className="col s4 right-align">
                    <a className="btn-floating btn-small waves-effect waves-light" title="На месяц назад" onClick={ this.state.onDec }><i className="material-icons">fast_rewind</i></a>
                    <a className="btn-floating btn-large waves-effect waves-light" title="Текущий месяц"><i className="material-icons">today</i></a>
                    <a className="btn-floating btn-small waves-effect waves-light" title="На месяц вперёд" onClick={ this.state.onInc }><i className="material-icons">fast_forward</i></a>
                </div>
            </div>
        )
    }
}
