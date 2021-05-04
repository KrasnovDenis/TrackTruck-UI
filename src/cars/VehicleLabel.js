import React from 'react';
import {Link} from "react-router-dom";
import "../style/components/customer/Vehicle.css";
import carPic from '../style/images/icons/car_default_icon.png'


export function VehicleLabel(props) {
    const description = props.car.description
    return (
        <div className="car jumbotron" style={{borderRadius:'0px'}}>
            <div className="car-number">
                Номерной знак: <h5 style={{fontFamily: "Arial"}}>{props.car.stateNumber}</h5>
            </div>
            <img className="car-img-top" alt="машина" width="250px" style={{paddingBottom: "20px", fontFamily: "Arial"}}
                 src={carPic}/>
            <div className="car-body">
                <Link to={'/customer/vehicles/' + props.car.id} style={{fontSize: "20px"}}>{props.car.model}</Link>
                <p className="car-description">
                    {description === "" ?
                        <br/> : description
                    }
                </p>
            </div>
        </div>
    );
}
