import jwtDecode from 'jwt-decode';

class AuthService {
    constructor(api) {
        this.API_URL = api;
    }

    setToken(userToken) {
        localStorage.setItem('userToken', userToken);
    }

    getToken(userToken) {
        return localStorage.getItem(userToken);
    }
}

export default AuthService