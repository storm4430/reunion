import React from 'react';
import Api from '../../APIFactory';
import CalendDays from './calendDays';


export default class PersonalCalendar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            days  :[]
        };
        this.api = new Api();
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ days : nextProps.days });
    }

    componentDidMount() {
        // this.getCalendar();
    }

    render() {
        return (
            <table className="bordered centered">
                <thead>
                    <tr>
                        <th>Неделя</th>
                        <th>Понедельник</th>
                        <th>Вторник</th>
                        <th>Среда</th>
                        <th>Четверг</th>
                        <th>Пятница</th>
                        <th>Суббота</th>
                        <th>Воскресенье</th>
                    </tr>
                </thead>
                <CalendDays days = { this.state.days }/>
            </table>
        )
    }
}