import React from 'react';
import update from 'react-addons-update';
import axios from 'axios';

export default class NewMenuItem extends React.Component{
    constructor(props) {
        super();
        this.state = {
            roles: props.roles,
            item:[]
        };
        this.itempropChange = this.itempropChange.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    saveItem(e){
        // let data = JSON.stringify(this.state.item);
        axios.post('http://193.124.178.232:100/wbp/menu', this.state.item)
            .then(function (response) {
                Materialize.toast('OK!', 3000, 'rounded green')
            })
            .catch(function (error) {
                Materialize.toast(error.hint, 3000, 'rounded red')
            });
    }

    //Menu item changing event
    itempropChange(event){
        let t = event.currentTarget.dataset.mode;
        let s = (t === 'roles')?
            JSON.parse('[' + event.target.value + ']'):
            event.target.value;
        this.setState({
            item: update(this.state.item, {[`${t}`]: {$set: s}})
        })
    }

    bindArrayChange(){
        $('select').off().change(function() {
            var newValuesArr = [],
                select = $(this),
                ul = select.prev();
            ul.children('li').toArray().forEach(function (li, i) {
                if ($(li).hasClass('active')) {
                    newValuesArr.push(select.children('option').toArray()[i].value);
                }
            });
            $(".hms[data-r='" + select.attr('data-r') + "']").val(newValuesArr).click();
        });
    }

    getRoles() {
        console.log('My roles are: ',this.state.roles);
        return(
            <select multiple
                    data-r={this.state.item.id}
                    onChange={this.itempropChange}
                    value={this.state.item.roles}
                    data-mode="roles">
                {this.state.roles.map(i => { return (
                    <option key={i.id} value={i.id}>{i.name}</option>)
                })}
            </select>
        )
    }

    componentDidMount(){
        $('select').material_select();
        this.bindArrayChange();
    }

    getEditForm(){
        return(
            <div className="row incollapse">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <input multiple="multiple" onClick={this.itempropChange} className="hmn" data-r="1" hidden="hidden" data-mode="roles" />
                            <input placeholder="Наименование"
                                   type="text"
                                   data-mode="ptitle"
                                   value={this.state.item.ptitle}
                                   onChange={this.itempropChange}/>
                            <label className="active">Наименование</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Путь"
                                   type="text"
                                   data-mode="apiurl"
                                   value={this.state.item.apiurl}
                                   onChange={this.itempropChange} />
                            <label className="active">Путь</label>
                        </div>
                        <div className="input-field col s4">
                            <input placeholder="Родительский элемент"
                                   type="number"
                                   data-mode="parentid"
                                   value={this.state.item.parentid}
                                   onChange={this.itempropChange} />
                            <label className="active">Родительский элемент</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2">
                            <input placeholder="Порядок"
                                   type="number"
                                   data-mode="orderby"
                                   value={this.state.item.orderby}
                                   onChange={this.itempropChange} />
                            <label className="active">Порядок</label>
                        </div>
                        <div className="input-field col s4">
                            {this.getRoles()}
                            <label className="active">Роли</label>
                        </div>
                        <div className="input-field col s3">
                            <input placeholder="Иконка"
                                   onChange={this.itempropChange}
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

    render() {
        return(
                this.getEditForm()
        )
    }
}