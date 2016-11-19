import React from 'react';
import axios from 'axios';
import update from 'react-addons-update';

export default class UserPic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            curentPic : {}
        };
        this.changeUserPic = this.changeUserPic.bind(this);
        this.changeIconClick = this.changeIconClick.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState( {curentPic : nextProps.image} );
    }

    changeUserPic(event) {
        event.persist();
        $('#uploader').addClass('active');
        let fd = new FormData;
        fd.append('ava', event.currentTarget.files[0]);
        axios.post('http://193.124.178.232:100/wbp/ava', fd)
            .then((response) => {
                Materialize.toast('Ok!', 3000, 'rounded green');
                axios.get('http://193.124.178.232:100/wbp/ava')
                    .then((r) => {
                        this.setState({
                            curentPic: update(this.state.curentPic, {val: {$set: r.data}})
                        });
                        $('#uploader').removeClass('active');
                    })
            })
            .catch(function (error) {
                $('#uploader').removeClass('active');
                Materialize.toast(error, 3000, 'rounded red');
            });
    }

    changeIconClick(event) {
        event.preventDefault();
        $('#hidFInput').click();
    }

    render() {
        return (
            <figure className="card-profile-image">
                <input type="file" accept="image/jpeg" onChange={this.changeUserPic} hidden="hidden" id="hidFInput"/>
                <img src={ this.state.curentPic.val } alt="profile image" className="circle z-depth-2 responsive-img" onClick={ this.changeIconClick }/>
            </figure>
        )
    }
}
