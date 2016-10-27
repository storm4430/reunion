import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            head:{}
        };
    }

    getData() {
        axios.get(`http://193.124.178.232:100/wbp/menu`)
            .then(res => {
                const items = res.data;
                this.setState({ items: items.data, head: items });
            })
    }

    hasChild(id) {
        if (this.state.items.filter((t) => {return t.parentid === id}).length > 0)
        {
            return true
        }
        else{
            return false;
        }

    }

    createtreenode(obj) {
        // console.log(obj.id, ' - ',this.hasChild(obj.id));
        if (this.hasChild(obj.id) === true)
            return (
                <ul key={obj.id} id="ulcollapsible" className="collapsible collapsible-accordion">
                    <li>
                        <a className="collapsible-header waves-effect waves-teal active"><i className="material-icons">{obj.icon}</i>{obj.id} {obj.ptitle} {obj.parentid}</a>
                        <div className="collapsible-body" >
                            {/*style="display: block;"*/}
                            <ul>
                                <li><a href="carousel.html">Carousel</a></li>
                                <li><a href="collapsible.html">Collapsible</a></li>
                                <li><a href="dialogs.html">Dialogs</a></li>
                                <li><a href="dropdown.html">Dropdown</a></li>
                                <li><a href="media.html">Media</a></li>
                                <li><a href="modals.html">Modals</a></li>
                                <li><a href="parallax.html">Parallax</a></li>
                                <li><a href="pushpin.html">Pushpin</a></li>
                                <li><a href="scrollfire.html">ScrollFire</a></li>
                                <li><a href="scrollspy.html">Scrollspy</a></li>
                                <li className="active"><a href="side-nav.html">SideNav</a></li>
                                <li><a href="tabs.html">Tabs</a></li>
                                <li><a href="transitions.html">Transitions</a></li>
                                <li><a href="waves.html">Waves</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            )
        else {
            return ''
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
    }

    componentDidUpdate() {
        $('.collapsible').collapsible();
    }

    render() {
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
    document.getElementById('mmenu')
);
$("#button-collapse").sideNav();


