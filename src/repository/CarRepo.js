import axios from 'axios'
import {HOST_URL} from "../application-config.json";

const URL = `${HOST_URL}/api/cars`;

class CarRepo {

    getCarById(id) {
        return axios.get(`${URL}/${id}`);
    }

    updateCar(car) {
        return axios.put(`${URL}/${car.id}`, car);
    }

    deleteCarById(id) {
        return axios.delete(`${URL}/${id}`);
    }

    createCar(car) {
        return axios.post(URL, car);
    }
}

export default new CarRepo();