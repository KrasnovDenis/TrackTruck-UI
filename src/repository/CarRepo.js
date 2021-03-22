import axios from 'axios'

const CARS_REST = 'http://80.78.240.218/api/cars';
class CarRepo {

    getCarById(id){
        return axios.get(`${CARS_REST}/${id}`);
    }

    updateCar(car){
        return axios.put(`${CARS_REST}/${car.id}`, car);
    }

    deleteCarById(id){
        return axios.delete(`${CARS_REST}/${id}`);
    }

    createCar(car){
        return axios.post(CARS_REST, car);
    }
}

export default new CarRepo();