import React from 'react';
import update from 'react-addons-update';
import axios from 'axios'

export default class NewMenuItem extends React.Component{
    constructor() {
        super();
        this.state = {
            item: {}
        };
        this.itemPropChange = this.itemPropChange.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    saveItem(e){
        // let data = JSON.stringify(this.state.item);
        axios.post('http://193.124.178.232:100/wbp/menu', this.state.item)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                Materialize.toast(error.hint, 3000, 'rounded red')
            });
    }

    itemPropChange(event){
        let t = event.currentTarget.dataset.mode;
        this.setState({
            item: update(this.state.item, {[`${t}`]: {$set: event.target.value}})
        });
        console.log(this.state.item)
    }

    componentDidMount(){
        $('select').material_select();
    }

    getEditForm(){
        return(
            <div className="row incollapse">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <input placeholder="Наименование"
                                   type="text"
                                   data-mode="ptitle"
                                   value={this.state.item.ptitle}
                                   onChange={this.itemPropChange}/>
                            <label>Наименование</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Путь"
                                   type="text"
                                   data-mode="apiurl"
                                   value={this.state.item.apiurl}
                                   onChange={this.itemPropChange} />
                            <label className="active">Путь</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Родительский элемент"
                                   type="number"
                                   data-mode="parentid"
                                   value={this.state.item.parentid}
                                   onChange={this.itemPropChange} />
                            <label className="active">Родительский элемент</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2">
                            <input placeholder="Порядок"
                                   type="number"
                                   data-mode="orderby"
                                   value={this.state.item.orderby}
                                   onChange={this.itemPropChange} />
                            <label className="active">Порядок</label>
                        </div>
                        <div className="input-field col s4">
                            <select multiple
                                    defaultValue={this.state.item.roles}
                                    data-mode="roles"
                                    value={this.state.item.roles}
                                    onChange={this.itemPropChange}>
                                <option defaultValue="[-1]" disabled >Роли</option>
                                <option value="1">Разработка</option>
                                <option value="2">Сотрудник</option>
                                <option value="4">Администратор</option>
                                <option value="3">Option 3</option>
                            </select>

                            <label className="active">Роли</label>
                        </div>
                        <div className="input-field col s3">
                            <input placeholder="Иконка"
                                   onChange={this.itemPropChange}
                                   type="text"
                                   defaultValue={this.state.item.icon}
                                   data-mode="icon" />
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

    // getMenuDetails() {
    //     return (
    //         this.getEditForm()
    //     )
    // }

    render() {
        return(
                this.getEditForm()
        )
    }
}