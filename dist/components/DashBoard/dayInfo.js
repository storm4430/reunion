import React from 'react';

export default class DayInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            day : props.day
        };
    }

    prepareDayView(){

    }

    componentDidMount() {
        $('.modal').modal();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ day: nextProps.day})
    }

    render() {
        console.log(this.state.day)
        return (
            <div>
                <div className="modal-content">
                    <h4 className="center">{ this.state.day.dayname }, {this.state.day.dday}, { this.state.day.monthname } </h4>
                    <ul className="collection">
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">06:00</div>
                                <div className="col s10">Встреча</div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">07:00</div>
                                <div className="col s10"></div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">08:00</div>
                                <div className="col s10"></div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">09:00</div>
                                <div className="col s10">Совещание у министра</div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">10:00</div>
                                <div className="col s10"></div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">11:00</div>
                                <div className="col s10"></div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">12:00</div>
                                <div className="col s10"></div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">13:00</div>
                                <div className="col s10"></div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">14:00</div>
                                <div className="col s10"></div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">15:00</div>
                                <div className="col s10"></div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">16:00</div>
                                <div className="col s10"></div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row noMarginBottom">
                                <div className="col s2">17:00</div>
                                <div className="col s10"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}