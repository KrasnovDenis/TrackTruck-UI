import React, {Component} from "react";
import {VehicleLabel} from "../cars/VehicleLabel";
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "../customer/PrivateArea";
import ParkRepo from "../repository/ParkRepo";
import {Col, Container, Row} from "reactstrap";
import ModalAddCar from "../cars/ModalAddCar";
import ModalRenamePark from "./ModalRenamePark";
import Footer from "../common/Footer";
import ParkDiagram from "../diagrams/parks/ParkDiagram";

class Park extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: [],
            cars: [],
            id: []
        }
    }

    async componentDidMount() {
        const parkId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

        await ParkRepo
            .getParkById(parkId)
            .then((resp) => (
                this.setState({
                    cars: resp.data.cars,
                    name: resp.data.name,
                    id: resp.data.id
                })
            ))
    }

    render() {
        let park = {
            id: this.state.id,
            name: this.state.name
        }

        return (
            <div>
                <div className="content-customer">
                    <SideBar menuItems={setUpSideBar()}/>
                    <Container>
                        <Row>
                            <Col >
                                <h1 style={{display:"inline"}}>{this.state.name}</h1>
                                <ModalRenamePark park={park}/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col sm="2">
                                <ModalAddCar/>
                            </Col>
                        </Row>
                    </Container>
                    {
                        this.state.cars.map(car => <VehicleLabel car={car}/>)
                    }
                    <ParkDiagram cars={this.state.cars}/>
                </div>
                <Footer/>
            </div>)
    }
}

export default Park;

