import React from 'react';
import update from 'react-addons-update';
import Api from '../../APIFactory';

export default class NewMenuItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item:{}
        };
        this.api = new Api();
        this.itempropChange = this.itempropChange.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    saveItem(e){
        this.api.post('/menu',this.state.item, () => {
            $('.modal').modal('close');
        })
    }

    //Menu item changing event
    itempropChange(event){
        let t = event.currentTarget.dataset.mode;
        let s = event.target.value;
        this.setState({
            item: update(this.state.item, {[`${t}`]: {$set: s}})
        })
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
                        <div className="input-field col s2">
                            <input placeholder="Родительский элемент"
                                   type="number"
                                   data-mode="parentid"
                                   value={this.state.item.parentid}
                                   onChange={this.itempropChange} />
                            <label className="active">Родительский элемент</label>
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