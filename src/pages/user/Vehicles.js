import React, {Component} from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";
import {VehicleLabel} from "../../components/customer/VehicleLabel";

class Vehicles extends Component {
    render() {
        const sideBarItems = setUpSideBar();
        return (
            <div className="feed">
                <SideBar menuItems={sideBarItems}/>
                <div className='content-customer'>
                    <VehicleLabel cars={getCarInfoStub()}/>
                </div>
            </div>
        )
    }
}

export default Vehicles

function getCarInfoStub() {
    return {
        id: "1",
        owner: "ООО Зеленоглазое Такси",
        name: "Парк сокольники"
    };
}