import axios from "axios";

const PARKS_REST = 'http://80.78.240.218/api/parks';

class ParkRepo {

    getParkById(id){
        return axios.get(`${PARKS_REST}/${id}`);
    }

    getAllParksByOwner(userId){
        return axios.get(`${PARKS_REST}/ids/${userId}`);
    }

    createPark(park){
        return axios.post(PARKS_REST, park);
    }

    updatePark(park){
        return axios.put(PARKS_REST, park);
    }

    deletePark(id){
        return axios.delete(`${PARKS_REST}/${id}`);
    }

    addCarToPark(carId, parkId){
        return axios.patch(`${PARKS_REST}/${carId}&${parkId}`)
    }

    deleteCarFromPark(carId, parkId){
        return axios.delete(`${PARKS_REST}/${carId}&${parkId}`);
    }

}

export default new ParkRepo();