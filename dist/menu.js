import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MenuEdit from './containers/menuedit';
import Index from './containers/index';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            head:{},
            route: window.location.hash.substr(1)
        };
    }

    getData() {
        axios.get(`http://193.124.178.232:100/wbp/menu`)
            .then(res => {
                const items = res.data;
                this.setState({ items: items.data, head: items });
            })
            .catch(error => {
                Materialize.toast(error.message, 3000, 'rounded red')
            });
    }

    hasChild(id) {
        return (this.state.items.filter((t) => {return t.parentid === id}).length > 0)?
            true:
                false;
    }

    hasParent(id) {
        return (this.state.items.filter((t) => {return t.id === id}).length > 0)?
            true:
                false;
    }

    getnodeChild(id)  {
        return this.state.items.filter((t) => {return t.parentid === id}).map(
         (i => (
                    <li key={i.id}><a href={i.apiurl}><i className="material-icons">{i.icon}</i>{i.ptitle}</a></li>
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
                    <li key={obj.id} ><a href={obj.apiurl} className="padding-mid"><i className="material-icons">{obj.icon}</i>{obj.ptitle}</a></li>
                )
            }
        }
    }

    preparetree() {
        return (this
                    .state
                        .items
                            .sort((obj1, obj2) => { return obj1.id - obj2.id })
                                .map(item => this.createtreenode(item)))
    }


    componentDidMount() {
        this.getData();
        // window.addEventListener('hashchange', () => {
        //     this.setState({
        //         route: window.location.hash.substr(1)
        //     })
        // })

    }

    componentDidUpdate() {
        $(".collapsible-header").removeClass(function(){
            return "active";
        });
        $(".collapsible").collapsible({accordion: true});
        $(".collapsible").collapsible({accordion: false});
    }

    render() {
        // let Child
        // switch (this.state.route) {
        //     case '/MenuEdit': Child = MenuEdit; break;
        //     // case '/genre': Child = Genre; break;
        //     default: Child = Index;
        // }

        return (
            <ul id="slide-out" className="side-nav">
                <li>
                    <div className="userView">
                        <img className="background" src= {this.state.head.background}/>
                        <a href="#!user"><img className="circle" src={this.state.head.image} /></a>
                        <a href="#!name"><span className="white-text name">{this.state.head.fio}</span></a>
                        <a href="#!email"><span className="white-text email">{this.state.head.mail}</span></a>
                        <a href="#!orgname"><span className="white-text name">{this.state.head.orgname}</span></a>
                    </div>
                </li>
                {this.preparetree()}
            </ul>
        );
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById('container')
);
$("#button-collapse").sideNav();


