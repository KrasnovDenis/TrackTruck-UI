import axios from "axios";

const PARKS_REST = 'http://localhost:8080/parks';

class ParkRepo {

    getParkById(){
        return axios.get(`${PARKS_REST}/${id}`);
    }

    getAllParks(){
        return axios.get(PARKS_REST);
    }

    createPark(park){
        return axios.post(PARKS_REST, {
            id : park.id,
            name: park.name,
            owner: park.owner
        });
    }

    updatePark(park){
        return axios.put(PARKS_REST, {
            id : park.id,
            name: park.name,
            owner: park.owner,
            cars: park.cars
        });
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

export default ParkRepo;