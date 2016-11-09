import React from 'react';

export default class UserPic extends React.Component{
    constructor(props) {
        super();
        this.state = {
            curentPic : {}
        }
    }
    componentDidMount() {
        this.setState({ curentPic: props })
        console.log(this.state.curentPic);
    }

    render() {
        return (
            <img src={ this.state.curentPic } />
        )
    }
}
