import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        axios.get(`http://193.124.178.232:100/wbp/menu`)
            .then(res => {
                const items = res.data.data.map(obj => obj.data);
                this.setState({ items });
        });
    }

    render() {
        console.log(this.state.items)
        return (
            <div>
                <ul>
                    {this.state.items.map(item => <li key={item.fio}>{item.mail}</li>)}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById('mmenu')
);

