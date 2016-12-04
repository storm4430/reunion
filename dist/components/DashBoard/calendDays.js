import React from 'react';

export default class CalendDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days : props.days
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ days: nextProps.days })
    }

    getWeek (weekNum){
         return this.state.days.slice((weekNum == 0)? 0 :weekNum * 7, 7 * weekNum + 7).map(i =>
             (
                <td key={ i.dday }>
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <div className="card-panel teal activator">
                                  <span className="white-text">
                                      {
                                          (i.foundcount > 0)
                                              ? <div><span> Есть контрольные события </span> <span className="new red badge" data-badge-caption="">{ i.foundcount }</span></div>
                                              : <span> Контрольных событий нет </span>
                                      }
                                  </span>
                            </div>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4"> {i.monthname } { i.dday} <i className="material-icons right">more_vert</i></span>
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
                        48
                    </td>
                    { this.getWeek(0) }
                </tr>
                <tr>
                    <td>
                        49
                    </td>
                    { this.getWeek(1) }
                </tr>
                <tr>
                    <td>
                        50
                    </td>
                    { this.getWeek(2) }
                </tr>
                <tr>
                    <td>
                        51
                    </td>
                    { this.getWeek(3) }
                </tr>
                <tr>
                    <td>
                        52
                    </td>
                    { this.getWeek(4) }
                </tr>
            </tbody>
        )
    }
}
