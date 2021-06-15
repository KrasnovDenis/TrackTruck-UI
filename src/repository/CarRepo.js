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

    uploadPicture(carId, form) {
       return axios({
            method: "PATCH",
            url: `${URL}/${carId}`,
            data: form,
            headers: { "Content-Type": "multipart/form-data" },
        })
    }

    deleteCarById(id) {
        return axios.delete(`${URL}/${id}`);
    }

    createCar(car) {
        return axios.post(URL, car);
    }

    getPicture(pictureLink) {
        return axios.get(`${URL}/picture/${pictureLink}`);
    }
}

export default new CarRepo();