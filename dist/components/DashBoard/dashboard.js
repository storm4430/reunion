import React from 'react';


export default class DashBoard extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        $('#fullcalendar').fullCalendar({
            weekends: false,
            locale: 'ru'// will hide Saturdays and Sundays
        });
        $('.button-collapse').sideNav('hide');
    }

    render() {
        return (
            <div id="fullcalendar">

            </div>
        )
    }
}
