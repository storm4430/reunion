import React from 'react';
import axios from 'axios';
import update from 'react-addons-update';

export default class UserBackground extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            curentPic : {}
        };
        this.changeUserPic = this.changeUserPic.bind(this);
        this.changeBackGroundClick = this.changeBackGroundClick.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState( {curentPic : nextProps.image} );
    }

    changeUserPic(event) {
        event.persist();
        $('#ubloader').addClass('active');
        let fd = new FormData;
        fd.append('usrbg', event.currentTarget.files[0]);
        axios.post('http://193.124.178.232:100/wbp/usrbg', fd)
            .then((response) => {
                Materialize.toast('Ok!', 3000, 'rounded green');
                axios.get('http://193.124.178.232:100/wbp/usrbg')
                    .then((r) => {
                        this.setState({
                            curentPic: update(this.state.curentPic, {val: {$set: r.data}})
                        });
                        $('#ubloader').removeClass('active');
                    })
            })
            .catch(function (error) {
                $('#ubloader').removeClass('active');
                Materialize.toast(error, 3000, 'rounded red');
            });
    }
    changeBackGroundClick(event) {
        event.preventDefault();
        $('#hidBckInput').click();
    }
    render() {
        return (
            <div className="card-image waves-effect waves-block waves-light">
                <input type="file" accept="image/jpeg" onChange={this.changeUserPic} hidden="hidden" id="hidBckInput" />
                <img src={ this.state.curentPic.val } alt="user background" onClick={ this.changeBackGroundClick }/>
            </div>
        )
    }
}
