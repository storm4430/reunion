import React from 'react';
import update from 'react-addons-update';

export default class Roles extends React.Component{
    constructor() {
        super();
        this.state = {
            roles: {}
        };
        this.itemPropChange = this.itemPropChange.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }


}