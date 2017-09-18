

import Event from './Event';


export default class Api {


	static version = 2;

	static _api = false;
	static method = 'GET';


	static auth_id = 0;
	static auth_token = 0;


	static request = { url:'', body:''};
	static base_url = 'http://ghareluhelp.com';





	static init(user) {
		Api.auth_id = user.id;
		Api.auth_token = user.token;
	}


	static get(url) {

		Api.method = 'GET';
		Api.request.url = url;
		return Api.send();

	}

	static post(url) {

		Api.method = 'POST';
		Api.request.url = url;
		return Api.send();

	}

	static put(url) {

		Api.method = 'PUT';
		Api.request.url = url;
		return Api.send();

	}

	static delete(url) {

		Api.method = 'DELETE';
		Api.request.url = url;
		return Api.send();

	}


	static send(){

		Api.request.body = '';

		if(!Api._api)
			Api._api = new _Api();

		return Api._api;

	}



	static headers(){

		return {
			//'Host': 'web.ailm.dev' ,

			'auth-id' : Api.auth_id,
			'auth-token' : Api.auth_token,
			'api-version' : Api.version,

			'Accept': 'application/json',
    	'Content-Type': 'application/json',

		};

	}


	static fetch(callback) {

		let err = false;
		let response = {};
		let options = {
			method: Api.method,
			headers: Api.headers()
		};

		Event.fire('network.start');


		if(Api.method == 'POST')
			options.body = Api.request.body;

		fetch(Api.base_url + '/api' + Api.request.url, options)
		.then((response) => response.json())
		.then((response) => {
			err = false;
			Event.fire('network.success', response);
			callback(err, response);
		})
		.catch((error) => {
			err = true;
			Event.fire('network.error');
			callback(err, false);
		});



	  }



}















class _Api {





	params(p){

		if(Api.method == 'POST')
			Api.request.body = JSON.stringify(p);
		else
			Api.request.url += '?'+this.extract_params(p);


		return this;

	}


	fetch(callback){

		Api.fetch(callback);

	};









	extract_params(a){


	    let s = [];
	    let rbracket = /\[\]$/;



	    const isArray = function (obj) {
	        return Object.prototype.toString.call(obj) === '[object Array]';
	    };




	    const add = function (k, v) {
	        v = typeof v === 'function' ? v() : v === null ? '' : v === undefined ? '' : v;
	        s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
	    };



	    const buildParams = function (prefix, obj) {
	            var i, len, key;

	            if (prefix) {
	                if (isArray(obj)) {
	                    for (i = 0, len = obj.length; i < len; i++) {
	                        if (rbracket.test(prefix)) {
	                            add(prefix, obj[i]);
	                        } else {
	                            buildParams(prefix + '[' + (typeof obj[i] === 'object' ? i : '') + ']', obj[i]);
	                        }
	                    }
	                } else if (obj && String(obj) === '[object Object]') {
	                    for (key in obj) {
	                        buildParams(prefix + '[' + key + ']', obj[key]);
	                    }
	                } else {
	                    add(prefix, obj);
	                }
	            } else if (isArray(obj)) {
	                for (i = 0, len = obj.length; i < len; i++) {
	                    add(obj[i].name, obj[i].value);
	                }
	            } else {
	                for (key in obj) {
	                    buildParams(key, obj[key]);
	                }
	            }
	            return s;
	        };

	    return buildParams('', a).join('&').replace(/%20/g, '+');

	}







}
