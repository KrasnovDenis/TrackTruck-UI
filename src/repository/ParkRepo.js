import axios from "axios";
import {HOST_URL} from "../application-config.json";

const URL = `${HOST_URL}/api/parks`;

class ParkRepo {

    getParkById(id) {
        return axios.get(`${URL}/${id}`);
    }

    getAllParksByOwner(userId) {
        return axios.get(`${URL}/ids/${userId}`);
    }

    createPark(park) {
        console.log(URL);
        return axios.post(URL, park);
    }

    updatePark(park) {
        return axios.put(URL, park);
    }

    deletePark(id) {
        return axios.delete(`${URL}/${id}`);
    }

    addCarToPark(carId, parkId) {
        return axios.patch(`${URL}/${carId}&${parkId}`)
    }

    deleteCarFromPark(carId, parkId) {
        return axios.delete(`${URL}/${carId}&${parkId}`);
    }

}

export default new ParkRepo();