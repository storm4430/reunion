import React from 'react';
import update from 'react-addons-update';

export default class MenuItem extends React.Component{
    constructor(props) {
        super();
        this.state = {
            item: props.item
        };
        this.iconChange = this.iconChange.bind(this);
        this.ptitleChange = this.ptitleChange.bind(this);
    }

    getMenuItems() {
        return (
                this.getMenuDetails()
        )
    }

    iconChange(event){
        this.setState({
            item: update(this.state.item, {icon: {$set: event.target.value}})
        });
    }

    ptitleChange(event){
        this.setState({
            item: update(this.state.item, {ptitle: {$set: event.target.value}})
        });
    }

    getEditForm(){
        return(
            <div className="row incollapse">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <input placeholder="Наименование"
                                   onChange={this.ptitleChange}
                                   type="text"
                                   defaultValue={this.state.item.ptitle}
                                   autoFocus="autoFocus"/>
                            <label className="active">Наименование</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Путь" type="text" defaultValue={this.state.item.apiurl}/>
                            <label className="active">Путь</label>
                        </div>
                        <div className="input-field col s4">
                            <input type="text" defaultValue={this.state.item.parentid}/>
                            <label htmlFor="apiurl" className="active">Родительский элемент</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2">
                            <input placeholder="Порядок" type="text" defaultValue={this.state.item.orderby} autoFocus="autoFocus"/>
                            <label className="active">Порядок</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Роли" type="text" defaultValue={this.state.item.rolenames}/>
                            <label className="active">Роли</label>
                        </div>
                        <div className="input-field col s3">
                            <input placeholder="Иконка"
                                   onChange={this.iconChange}
                                   type="text"
                                   defaultValue={this.state.item.icon}/>
                            <label className="active">Иконка</label>
                        </div>
                        <div className="input-field col s1">
                            <i className="material-icons">{this.state.item.icon}</i>
                        </div>
                        <div className="input-field col s2">
                            <a className="waves-effect waves-light btn"><i className="material-icons left">done</i>СОХРАНИТЬ</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    getMenuDetails() {
        return (
            <li key={this.state.item.id}>
                <div className="collapsible-header">
                    <div className="row center">
                        <div className="col s2">{this.state.item.id}</div>
                        <div className="col s2">{this.state.item.ptitle}</div>
                        <div className="col s1">{this.state.item.parentid}</div>
                        <div className="col s3">{this.state.item.apiurl}</div>
                        <div className="col s1">{this.state.item.orderby}</div>
                        <div className="col s2">{this.state.item.rolenames}</div>
                        <div className="col s1 center" ><i className="material-icons">{this.state.item.icon}</i></div>
                    </div>
                </div>
                <div className="collapsible-body">
                    {this.getEditForm()}
                </div>
            </li>
        )
    }

    render() {
        return(
                this.getMenuItems()
        )
    }
}