import React, {Component} from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";
import {VehicleLabel} from "../../components/customer/VehicleLabel";
import {Col, Container, Row} from "reactstrap";

class Vehicles extends Component {
    render() {
        const sideBarItems = setUpSideBar();
        return (
            <div className="feed">
                <SideBar menuItems={sideBarItems}/>
                <Container className='content-customer' style={{ maxWidth: "990px"}} fluid="true">
                    <Row>
                        <Col>
                            <h3 style={{ textDecoration: "underline"}}>
                                <i>Все автомобили</i>
                            </h3>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col className="sm-1 lg-1">
                            <VehicleLabel cars={getCarInfoStub()}/>
                            <VehicleLabel cars={getCarInfoStub()}/>
                            <VehicleLabel cars={getCarInfoStub()}/>
                            <VehicleLabel cars={getCarInfoStub()}/>
                            <VehicleLabel cars={getCarInfoStub()}/>
                            <VehicleLabel cars={getCarInfoStub()}/>
                            <VehicleLabel cars={getCarInfoStub()}/>
                            <VehicleLabel cars={getCarInfoStub()}/>
                            <VehicleLabel cars={getCarInfoStub()}/>
                            <VehicleLabel cars={getCarInfoStub()}/>
                            <VehicleLabel cars={getCarInfoStub()}/>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Vehicles

function getCarInfoStub() {
    return {
        id: "1",
        model: "Ford Mustang",
        park: "Парк сокольники",
        description: "}{орошая машина"
    };
}