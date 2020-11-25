import React from 'react';
import {Vehicle} from "../customer/Vehicle.js";

export function AutoPark() {
    return (<div className="Autopark">
        <h1>Autopark</h1>
        <Vehicle cars={getCarInfoStub()}/>
        <Vehicle cars={getCarInfoStub()}/>
        <Vehicle cars={getCarInfoStub()}/>
        <Vehicle cars={getCarInfoStub()}/>
        <Vehicle cars={getCarInfoStub()}/>
        <Vehicle cars={getCarInfoStub()}/>
        <Vehicle cars={getCarInfoStub()}/>
    </div>);

}

function getCarInfoStub() {
    return {
        id: "1",
        model: "Tesla Model 3",
        description: "Моя любимая машина!"
    };
}