import axios from "axios";
import {HOST_URL} from "../application-config.json";

const URL = `${HOST_URL}/api/`;

class GraphicsRepo {
    async getSeriesForVehicle(torqueId, parameter, dateFrom, dateTo) {
        const requestBody = {
            torqueId: torqueId,
            parameters: [parameter],
            dateFrom: dateFrom,
            dateTo: dateTo
        }

        let timeValues = [];
        let metricValues = [];
        try {
            let response = await axios.post(URL + "series", requestBody)

            if (response.status === 200) {
                for (let i = 0; i < response.data.length; i++) {
                    timeValues[i] = response.data[i].time
                    metricValues[i] = response.data[i].value
                }
            }

        } catch (e) {
            console.log(e)
        }

        return {
            chartName: parameter,
            timeValues: timeValues,
            metricValues: metricValues,
            dateFrom: dateFrom,
            dateTo: dateTo
        }
    }


    //can be used for get data
    //for one or many parks (depends on parkIds params)
    async getSeriesForParks(parkIds, parameter, dateFrom, dateTo) {
        const requestBody = {
            providedIds: parkIds,
            parameter: parameter,
            dateFrom: dateFrom,
            dateTo: dateTo
        }

        try {
            let response = await axios.post(URL + "charts/parks", requestBody)

            if (response.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.log(e)
        }
    }


}

export default new GraphicsRepo();