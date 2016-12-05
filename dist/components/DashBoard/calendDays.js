import React from 'react';
import ReactDOM from 'react-dom';
import DayInfo from './dayInfo';

export default class CalendDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days : props.days
        };
        this.showEvents = this.showEvents.bind(this);
    }

    showEvents(event) {
        let t = $.grep(this.state.days, (e) => {
            return e.dday == event.currentTarget.dataset.day &&
                    e.monthname == event.currentTarget.dataset.month
        });
        ReactDOM.render(
            <DayInfo day = { t[0] } />,
            document.getElementById('modalWindow')
        );

        $('#modalWindow').modal('open');
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ days: nextProps.days })
    }

    getWeekNum(weekNum) {
        if (this.state.days.length > 0)
            return this.state.days[(weekNum * 7)+1].dweek;
    }

    getWeek (weekNum){
         return this.state.days.slice((weekNum == 0)? 0 :weekNum * 7, 7 * weekNum + 7).map(i =>
             (
                <td key={ i.dday } className="td1of7">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <div className="card-panel teal activator">
                                  <span className="white-text">
                                      {
                                          (i.foundcount > 0)
                                              ? <div><span> Есть контрольные события </span> <span className="new red badge" data-day={ i.dday } data-month={ i.monthname } data-badge-caption="" onClick={ this.showEvents }>{ i.foundcount }</span></div>
                                              : <span> Контрольных событий нет </span>
                                      }
                                  </span>
                            </div>
                        </div>
                        <div className="card-content">
                            <span className="card-title  smaller activator grey-text text-darken-4"> {i.monthname } { i.dday} <i className="material-icons right">more_vert</i></span>
                            <p><a className="activator">Подробней</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Подробности<i className="material-icons right">close</i></span>
                            <p>Поручений: { (i.recipients != null)? i.recipients.length : 0} </p>
                            <p>Событий  : { (i.events != null)? i.events.length: 0} </p>
                        </div>
                    </div>
                </td>
            )
        )
    }

    render() {
        return (
            <tbody>
                <tr>
                    <td>
                        { this.getWeekNum(0)}
                    </td>
                    { this.getWeek(0) }
                </tr>
                <tr>
                    <td>
                        { this.getWeekNum(1)}
                    </td>
                    { this.getWeek(1) }
                </tr>
                <tr>
                    <td>
                        { this.getWeekNum(2)}
                    </td>
                    { this.getWeek(2) }
                </tr>
                <tr>
                    <td>
                        { this.getWeekNum(3)}
                    </td>
                    { this.getWeek(3) }
                </tr>
                <tr>
                    <td>
                        { this.getWeekNum(4)}
                    </td>
                    { this.getWeek(4) }
                </tr>
            </tbody>
        )
    }
}
