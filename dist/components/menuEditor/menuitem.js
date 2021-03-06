import React from 'react';
import update from 'react-addons-update';
import Api from '../../APIFactory';

export default class MenuItem extends React.Component{
    constructor(props) {
        super();
        this.state = {
            item: props.item,
            roles: props.roles
        };
        this.itempropChange = this.itempropChange.bind(this);
        this.api = new Api();
        this.saveItem = this.saveItem.bind(this);
    }

    getMenuItems() {
        return (
                this.getMenuDetails()
        )
    }

    saveItem(){
        console.log(JSON.stringify(this.state.item))
        this.api.put('/menu?id=' + this.state.item.id, this.state.item, null, null)
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

    componentDidMount(){
        $('select').material_select();
        this.bindArrayChange();
    }

    getRoles() {
        return(
            <select multiple
                    data-r={this.state.item.id}
                    onChange={this.itempropChange}
                    value={this.state.item.roles}
                    data-mode="roles">
                    {this.state.roles.map(i => { return(
                        <option key={i.id} value={i.id} selected={this.state.item.roles.indexOf(i.id) === -1}>{i.name}</option>)
                    })}
            </select>
        )
    }

    getEditForm(){
        return(
            <div className="row incollapse">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <input multiple="multiple" onClick={this.itempropChange} className="hms" data-r={this.state.item.id} hidden="hidden" data-mode="roles" />
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
                        <div className="input-field col s4 hms">
                            {this.getRoles()}
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
                        <div className="input-field col s2  center-align">
                            <a className="waves-effect waves-light btn btn-floating"
                               onClick={this.saveItem}>
                                <i className="material-icons left">done</i></a>
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
                        <div className="col s1">{this.state.item.id}</div>
                        <div className="col s2">{this.state.item.ptitle}</div>
                        <div className="col s1">{this.state.item.parentid}</div>
                        <div className="col s1">{this.state.item.apiurl}</div>
                        <div className="col s1">{this.state.item.orderby}</div>
                        <div className="col s5">{this.state.item.rolenames}</div>
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