import axios from "axios";
import {HOST_URL} from "../application-config.json";

const URL = `${HOST_URL}/api/`;

class MapRepo {

    async getMarkerForCar(carId) {
        try {

            const requestBody = {
                carId: carId
            };

            let response = await axios.post(URL + "map/marker", requestBody)

            if (response.status === 200) {
                return response.data;
            }

        } catch (e) {
            console.log(e)
        }
    }

    async getTrace(carId, dateFrom, dateTo) {
        try {

            const requestBody = {
                carId: carId,
                dateFrom: dateFrom,
                dateTo: dateTo
            };

            let response = await axios.post(URL + "map/trace", requestBody)

            if (response.status === 200) {
                return response.data;
            }

        } catch (e) {
            console.log(e)
        }
    }
}


export default new MapRepo();