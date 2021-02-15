import axios from "axios";

const URL = "http://localhost:8080/series";

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
            let response = await axios.post(URL, requestBody)

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

}

export default new GraphicsRepo();