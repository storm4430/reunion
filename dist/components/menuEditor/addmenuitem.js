import React from 'react';
import update from 'react-addons-update';
import axios from 'axios'

export default class NewMenuItem extends React.Component{
    constructor() {
        super();
        this.state = {
            item: {}
        };
        this.iconChange = this.iconChange.bind(this);
        this.ptitleChange = this.ptitleChange.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    saveItem(e){
        let data = JSON.stringify(this.state.item);
        axios.post('http://193.124.178.232:100/wbp/menu', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                Materialize.toast(error.hint, 3000, 'rounded red')
            });
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
                                   autoFocus="autoFocus"
                                   value={this.state.item.ptitle}/>
                            <label>Наименование</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Путь" type="text" />
                            <label className="active">Путь</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Родительский элемент" type="number" />
                            <label className="active">Родительский элемент</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2">
                            <input placeholder="Порядок" type="number"  autoFocus="autoFocus"/>
                            <label className="active">Порядок</label>
                        </div>
                        <div className="input-field col s4">
                            <select multiple defaultValue="[-1]" id="hhh">
                                <option value="-1" disabled selected>Роли</option>
                                <option value="1">Разработка</option>
                                <option value="2">Сотрудник</option>
                                <option value="3">Option 3</option>
                            </select>

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