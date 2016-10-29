import React, { Component } from 'react';

export default class MenuEdit extends Component {
    componentDidMount(){
        $('.button-collapse').sideNav('hide');
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>Раздел sdfv/Редактирование меню</div>
            </div>
        )
    }
}