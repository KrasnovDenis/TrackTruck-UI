import React, {Component} from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";
import CarRepo from "../../repository/CarRepo";

class Vehicle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: "",
            description: "",
            year: "",
            park:""
        }
    }

    componentDidMount() {
        const url = window.location.pathname;
        const carId = url.substr(url.lastIndexOf('/') + 1);
        CarRepo.getCarById(carId).then((response) => {
            this.setState({
                model: response.data.model,
                description: response.data.description,
                year: response.data.year,
                park: response.data.park
                })
        });

    }

    render() {
        return (
            <div className="feed">
                <SideBar menuItems={setUpSideBar()}/>
                <div className="content-customer">
                    <div> Модель : {this.state.model}</div>
                    <div> Описание : {this.state.description}</div>
                    <div> Парк : {this.state.park}</div>
                </div>
            </div>
        )
    }
}

export default Vehicle

