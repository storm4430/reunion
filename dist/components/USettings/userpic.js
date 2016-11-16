import React from 'react';
import axios from 'axios';
import update from 'react-addons-update';

export default class UserPic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            curentPic : {}
        },
        this.changeUserPic = this.changeUserPic.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState( {curentPic : nextProps.image} );
    }

    changeUserPic(event) {
        event.persist();
        $('#uploader').addClass('active');
        let t = URL.createObjectURL(event.currentTarget.files[0]);
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
// <div className="col s12 m6 l6">
// <div className="card-panel grey lighten-5 z-depth-1">
// <div className="row valign-wrapper">
// <div className="col s2">
// <img src={ this.state.curentPic.val } alt="" className="circle responsive-img" />
// </div>
// <div className="col s8">
// <span className="black-text">
// <form action="#">
// <div className="file-field input-field">
// <div className="btn blue-grey darken-1">
// <span>Изменить изображение</span>
// <input type="file" accept="image/jpeg" onChange={this.changeUserPic} />
// </div>
// <div className="file-path-wrapper">
// <input className="file-path validate" type="text" />
// </div>
// </div>
// </form>
// </span>
// </div>
// <div className="col s2">
// <div id="uploader" className="preloader-wrapper small">
// <div className="spinner-layer spinner-green-only">
// <div className="circle-clipper left">
// <div className="circle"></div>
// </div><div className="gap-patch">
// <div className="circle"></div>
// </div><div className="circle-clipper right">
// <div className="circle"></div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
// </div>
    render() {
        return (
            <figure className="card-profile-image">
                <img src={ this.state.curentPic.val } alt="profile image" className="circle z-depth-2 responsive-img activator" />
            </figure>
        )
    }
}
