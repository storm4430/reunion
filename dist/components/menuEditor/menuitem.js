import React from 'react';
import update from 'react-addons-update';
import axios from 'axios'

export default class MenuItem extends React.Component{
    constructor(props) {
        super();
        this.state = {
            item: props.item
        };
        this.itempropChange = this.itempropChange.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    getMenuItems() {
        return (
                this.getMenuDetails()
        )
    }

    saveItem(e){
        console.log(JSON.stringify(this.state.item))
        axios.put('http://193.124.178.232:100/wbp/menu?id=' + this.state.item.id, this.state.item)
            .then(function (response) {
                Materialize.toast('Ok!', 3000, 'rounded green')
            })
            .catch(function (error) {
                Materialize.toast(error.hint, 3000, 'rounded red')
            });
    }

    //Menu item changing event
    itempropChange(event){
        let t = event.currentTarget.dataset.mode;
        this.setState({
            item: update(this.state.item, {[`${t}`]: {$set: event.target.value}})
        });
        console.log(this.state.item)
    }

    getEditForm(){
        return(
            <div className="row incollapse">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <input placeholder="Наименование"
                                   onChange={this.itempropChange}
                                   type="text"
                                   data-mode="ptitle"
                                   defaultValue={this.state.item.ptitle}
                                   autoFocus="autoFocus"/>
                            <label className="active">Наименование</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Путь"
                                   onChange={this.itempropChange}
                                   data-mode="apiurl"
                                   type="text"
                                   defaultValue={this.state.item.apiurl}/>
                            <label className="active">Путь</label>
                        </div>
                        <div className="input-field col s4">
                            <input type="number"
                                   onChange={this.itempropChange}
                                   data-mode="parentid"
                                   placeholder="Родительский элемент"
                                   defaultValue={this.state.item.parentid}/>
                            <label className="active">Родительский элемент</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2">
                            <input placeholder="Порядок"
                                   type="text"
                                   onChange={this.itempropChange}
                                   data-mode="orderby"
                                   defaultValue={this.state.item.orderby}
                                   autoFocus="autoFocus"/>
                            <label className="active">Порядок</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Роли"
                                   onChange={this.itempropChange}
                                   data-mode="rolenames"
                                   type="text"
                                   defaultValue={this.state.item.rolenames}/>
                            <label className="active">Роли</label>
                        </div>
                        <div className="input-field col s3">
                            <input placeholder="Иконка"
                                   onChange={this.itempropChange}
                                   data-mode="icon"
                                   type="text"
                                   defaultValue={this.state.item.icon}/>
                            <label className="active">Иконка</label>
                        </div>
                        <div className="input-field col s1">
                            <i className="material-icons">{this.state.item.icon}</i>
                        </div>
                        <div className="input-field col s2">
                            <a className="waves-effect waves-light btn"
                               onClick={this.saveItem}>
                                <i className="material-icons left">done</i>СОХРАНИТЬ</a>
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