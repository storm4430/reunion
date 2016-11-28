import axios from 'axios';
import ApiConfig from '../dist/Config/APIConfig';

export default class ApiFactory {
    constructor() {
        axios.defaults.withCredentials = true;
        this.paths = new ApiConfig();
    }

    get(url, callback){
        let result = axios.get(this.paths.ApiUrl.url + url)
                .then(res => {
                    const items = res.data;
                    return items;
                })
                .catch(error => {
                    Materialize.toast(error.message, 3000, 'rounded red');
                    return error.message;
                });
        result.then(function(){
            return result;
        });
        return result;
    }

    post(url, data, callback) {
        let result = axios.post(this.paths.ApiUrl.url + url, data)
            .then(res => {
                const items = res.status;
                return items;
            })
            .catch(error => {
                Materialize.toast(error.message, 3000, 'rounded red');
                return error.message;
            });
        result.then(function(){
            return result;
        });
        return result;
    }

    put(url, data, errCallback, successCallback) {
        let result = axios.put(this.paths.ApiUrl.url + url, data)
            .then(res => {
                const items = res.status;
                successCallback();
                return items;
            })
            .catch(error => {
                errCallback();
                Materialize.toast(error.message, 3000, 'rounded red');
                return error.message;
            });
        result.then(function(){
            return result;
        });
        return result;
    }

}