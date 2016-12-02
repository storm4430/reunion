import React from 'react';
import Api from '../../APIFactory';

export default class PersonalCalendar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            calend  :[]
        }
        this.api = new Api();
    }


    getCalendar() {
        this.api.get('', null).then((res) => {
            this.setState({ calend : res})
        })
    }

    componentDidMount() {
        this.getCalendar();
    }

    render() {
        return (
            ''
        )
    }
}