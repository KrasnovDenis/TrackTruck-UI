import axios from "axios";

const LOGIN_REST = 'http://localhost:8080/login';
const REGISTRATION_REST = 'http://localhost:8080/registration';

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