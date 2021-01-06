
const USER_REST = 'http://localhost:8080/';
class UserRepo {

    login(){
        return axios.post(`${USER_REST}/lo`);
    }
}