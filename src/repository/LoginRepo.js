import axios from "axios";

const LOGIN_REST = 'http://80.78.240.218/api/login';
const REGISTRATION_REST = 'http://80.78.240.218/api/registration';

class LoginRepo {

    login(email, password) {
        return axios.post(LOGIN_REST, {
            email: email,
            password: password
        })
    }

    registration(user) {
        return axios.post(
            REGISTRATION_REST,
            user, {
                'Content-Type':'application/json'
            }
        )
    }
}

export default new LoginRepo();