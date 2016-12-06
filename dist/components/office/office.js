import React from 'react';

import MainChart from './mainChart';

export default class Office extends React.Component{
    constructor() {
        super();
    }



    componentDidMount() {
        $('.button-collapse').sideNav('hide');

    }

    render() {
        return (
            <div>
                <MainChart />
            </div>
        )
    }
}
