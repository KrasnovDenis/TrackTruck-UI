import React, {Component} from "react";
import {VehicleLabel} from "../cars/VehicleLabel";
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "../user/PrivateArea";
import ParkRepo from "../repository/ParkRepo";


//страница прям конкретного парка с машинами
class Park extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: [],
            cars: []
        }
    }

    async componentDidMount() {
        const parkId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

        await ParkRepo
            .getParkById(parkId)
            .then((resp) => (
                this.setState({
                    cars: resp.data.cars,
                    name: resp.data.name})
            ))
    }

    render() {
        const park = this.state.park;
        console.log(park)
        return (<div className="content-customer">
            <SideBar menuItems={setUpSideBar()}/>

            <h1>Парк : {this.state.name}</h1>
            <br/>
            <h4>Машины</h4>

            {
                this.state.cars.map(car => <VehicleLabel car={car}/>)
            }
        </div>)
    }
}

export default Park

