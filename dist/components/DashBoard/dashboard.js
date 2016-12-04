import React from 'react';
import API from '../../APIFactory';

import PersonalCalendar from './personalCalendar';
import DashBoardController from './dashBoardController';


export default class DashBoard extends React.Component {
    constructor(props) {
        let cd = new Date();
        super(props);
        this.state = {
            currentMonth : cd.getMonth() + 1,
            currentYear  : cd.getFullYear(),
            days         : []
        };
        this.api = new API();
        this.incMonth = this.incMonth.bind(this);
        this.decMonth = this.decMonth.bind(this);
    }

    incMonth() {
        let t = this.state.currentMonth;
        (t > 11)
            ? this.setState({ currentMonth: 1, currentYear : this.state.currentYear + 1})
            : this.setState({ currentMonth: this.state.currentMonth + 1});
    }

    decMonth() {
        let t = this.state.currentMonth;
        (t < 2)
            ? this.setState({ currentMonth: 12, currentYear : this.state.currentYear - 1})
            : this.setState({ currentMonth: this.state.currentMonth - 1});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentMonth != this.state.currentMonth)
            this.getCalendar();
    }

    getCalendar() {
        this.api.get('/calendar?month=' + this.state.currentMonth + '&year=' + this.state.currentYear).then((res) => {
            this.setState({ days : res})
        })
    }

    componentWillMount() {

    }

    componentDidMount() {
        $('.button-collapse').sideNav('hide');
        this.getCalendar();
    }

    render() {
        return (
            <div id="fullcalendar">
                <DashBoardController
                    month = { this.state.currentMonth }
                    year = { this.state.currentYear }
                    onInc = { this.incMonth }
                    onDec = { this.decMonth }
                />
                <PersonalCalendar days = {this.state.days} />
            </div>
        )
    }
}
