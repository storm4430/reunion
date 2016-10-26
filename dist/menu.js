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

    componentDidMount() {
        axios.get(`http://193.124.178.232:100/wbp/menu`)
            .then(res => {
                const items = res.data;
                this.setState({ items: items.data, head: items });
            })
    }

    render() {
        return (
        <ul id="slide-out" className="side-nav">
            {this.state.items.map(item => <li key={item.id}><a href={item.apiurl}>{item.ptitle}</a></li>)}
            <li><a href="#!">First Sidebar Link</a></li>
            <li><a href="#!">Second Sidebar Link</a></li>
        </ul>
        );
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById('mmenu')
);

