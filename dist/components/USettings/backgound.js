import React from 'react';

export default class UserBackground extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            curentPic : {}
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState( {curentPic : nextProps.image} );
    }

    render() {
        return (
            <div className="col s12 m6 l6">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <div className="col s2">
                            <img src={ this.state.curentPic.val } alt=""  />
                        </div>
                        <div className="col s10">
                          <span className="black-text">
                             <a className="waves-effect waves-teal btn-flat">Изменить фон</a>
                          </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
