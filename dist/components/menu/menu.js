import React from 'react';
import { Link } from 'react-router';
import Api from './../../APIFactory'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            head:{},
        };
        this.api = new Api();
    }

    get_cookie ( cookie_name )
    {
        var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

        if ( results )
            return ( unescape ( results[2] ) );
        else
            return null;
    }

    getData() {
        this.api.get('/menu', null)
            .then(res => {
                this.setState({ items: res.data, head: res });
            })
    }

    hasChild(id) {
        return (this.state.items.filter((t) => {return t.parentid === id}).length > 0)
    }

    hasParent(id) {
        return (this.state.items.filter((t) => {return t.id === id}).length > 0)
    }

    getnodeChild(id)  {
        return this.state.items.filter((t) => {return t.parentid === id}).map(
         (i => (
                    <li key={i.id}><Link to={i.apiurl}><i className="material-icons">{i.icon}</i>{i.ptitle}</Link></li>
                 )
            )
        )
    }

    createtreenode(obj) {
        if (this.hasChild(obj.id) === true)
            return (
                <li key={obj.id} className="no-padding">
                    <ul className="collapsible collapsible-accordion">
                        <li>
                            <a className="collapsible-header waves-effect waves-green active"><i className="material-icons">{obj.icon}</i>{obj.ptitle}</a>
                            <div className="collapsible-body" >
                                {/*style="display: block;"*/}
                                <ul>
                                    {this.getnodeChild(obj.id)}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
            )
        else {
            if (this.hasChild(obj.id) === false && this.hasParent(obj.parentid) === false) {
                return (
                    <li key={obj.id} ><Link to={obj.apiurl} className="padding-mid"><i className="material-icons">{obj.icon}</i>{obj.ptitle}</Link></li>
                )
            }
        }
    }

    preparetree() {
        return (this
                    .state
                        .items
                            .sort((obj1, obj2) => { return obj1.parentid - obj2.parentid })
                                .map(item => this.createtreenode(item)))
    }


    componentDidMount() {
        this.getData();
        $("#button-collapse").sideNav();
    }

    componentDidUpdate() {
        $(".collapsible-header").removeClass(function(){
            return "active";
        });
        $(".collapsible").collapsible({accordion: true});
        $(".collapsible").collapsible({accordion: false});
    }

    render() {
        let styles = 'transform: translateX(0px)';
        return (
            <div>
                <div id="mmenu">
                    <ul id="slide-out" className="side-nav" style={{styles}}>
                        <li>
                            <div className="userView" >
                                <div className="background"><img src={this.state.head.background}/></div>
                                <a href="#!user"><img className="circle" src={this.state.head.image} /></a>
                                <a href="#!name"><span className="white-text name">{this.state.head.fio}</span></a>
                                <a href="#!email"><span className="white-text email">{this.state.head.mail}</span></a>
                                <a href="#!orgname"><span className="white-text name">{this.state.head.orgname}</span></a>
                            </div>
                        </li>
                        {this.preparetree()}
                    </ul>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
                <div className="modal" id="modalWindow">

                </div>
            </div>
        );
    }
}



