import {HOST_URL} from "../application-config.json";
import axios from "axios";

const URL = `${HOST_URL}/api/users/info`;

class UserRepo {

    getUserInfo(id) {
        return axios.get(`${URL}/${id}`);
    }

    getInfoForAllUsers() {
        return axios.get(`${URL}`);
    }

    updateUserStatus(email, status) {
        const requestBody = {
            email: email,
            status: status
        }


        return axios.post(`${URL}/status`,
            requestBody);
    }

    forgotPassword(email) {
        return axios.get(`${HOST_URL}/api/mail/forgotPassword/${email}`);
    }

    updatePassword(token, time, email, password) {
        const userData = {
            email: email,
            password: password,
            token: token,
            time: time
        }
        console.log(userData)
        return axios.post(`${HOST_URL}/api/users/updatePassword`, userData);
    }

    deleteCurrentUser(){
        let userId = localStorage.getItem('userId')
        localStorage.clear()
        axios.delete(`${HOST_URL}/api/users/${userId}`)

    }
}

export default new UserRepo();

