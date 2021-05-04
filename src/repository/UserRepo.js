import {HOST_URL} from "../application-config.json";
import axios from "axios";

const URL = `${HOST_URL}/api/users/info`;

class UserRepo {

    getUserInfo(id) {
        return axios.get(`${URL}/${id}`);
    }
}

export default new UserRepo();

