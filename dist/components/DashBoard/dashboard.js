import React from 'react';
import PersonalCalendar from 'personalCalendar';


export default class DashBoard extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        $('.button-collapse').sideNav('hide');
    }

    render() {
        return (
            <div id="fullcalendar">
                <PersonalCalendar />
            </div>
        )
    }
}
