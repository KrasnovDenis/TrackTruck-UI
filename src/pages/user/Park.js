import React, {Component} from "react";
import {VehicleLabel} from "../../components/customer/VehicleLabel";
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";


//страница прям конкретного парка с машинами
class Park extends Component{
    render(){
        return <div className="content-customer">
            <SideBar menuItems={setUpSideBar()}/>
            <h1>Парк : Сокольники</h1>
            <br/>
            <div>Машины</div>
            <VehicleLabel cars={getCarInfoStub()}/>
            <VehicleLabel cars={getCarInfoStub()}/>
            <VehicleLabel cars={getCarInfoStub()}/>
            <VehicleLabel cars={getCarInfoStub()}/>
            <VehicleLabel cars={getCarInfoStub()}/>
        </div>
    }
}

export default Park

function getCarInfoStub() {
    return {
        id: "1",
        model: "Tesla 3",
        description: "Моя любимая машина!"
    };
}