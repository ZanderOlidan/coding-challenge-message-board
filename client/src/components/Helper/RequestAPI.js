import jwtDecode from 'jwt-decode';

class RequestService {
    constructor(API, token) {
        this.API = API;
        this.token = token;
        this.claim = jwtDecode(this.token);
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json')
        this.headers.append('Authorization', 'Bearer '+this.token);
    }

    post(location, body) {
        return fetch(this.API + location, {
            method: 'post',
            headers : this.headers,
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(err => console.error(err))
    }

    get(location) {
        console.log('get called');
        return fetch(this.API + location, {
            method: 'get',
            headers: this.headers
        })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(err => console.error(err))
    }

    delete(location, body) {
        return fetch(this.API + location, {
            method: 'delete',
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err))
    }
    getClaim() {
        // { _id, token }
        return this.claim;
    }
    test() {
        return 'test';
    }
}

export default RequestService