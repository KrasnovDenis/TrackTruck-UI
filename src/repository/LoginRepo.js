import axios from "axios";

const LOGIN_REST = 'http://localhost:8080/login';
const REGISTRATION_REST = 'http://localhost:8080/registration';

class LoginRepo {

    login(email, password){
        return axios.post(LOGIN_REST, {
            email: email,
            password: password
        });
    }

    registration(user){
        return axios.get(REGISTRATION_REST,{
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            picture: user.picture,
            createTime: Date.now()
        });

    }
}

export default new LoginRepo();