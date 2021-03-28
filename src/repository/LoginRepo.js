import axios from "axios";
import {HOST_URL} from "../application-config.json";

const LOGIN_REST = `${HOST_URL}/api/login`;
const REGISTRATION_REST = `${HOST_URL}/api/registration`;

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
                'Content-Type': 'application/json'
            }
        )
    }
}

export default new LoginRepo();