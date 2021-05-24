import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "../customer/PrivateArea";
import CarRepo from "../repository/CarRepo";
import {Col, Container, Row} from "reactstrap";
import carPic from "../style/images/icons/car_default_icon.png";
import "../style/components/customer/Vehicle.css"
import ModalEditCar from "./ModalEditCar";
import ModalDeleteCar from "./ModalDeleteCar";
import Footer from "../common/Footer";
import CarDiagram from "../diagrams/cars/CarDiagram";

class Vehicle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: "",
            description: "",
            year: "",
            park: "",
            torqueId: "",
            image: [],
            fuel: []
        }
    }

    async componentDidMount() {
        const url = window.location.pathname;
        const carId = url.substr(url.lastIndexOf('/') + 1);
        try {

            await CarRepo.getCarById(carId)
                .then((response) => {
                    this.setState({
                        model: response.data.model,
                        description: response.data.description,
                        year: response.data.year,
                        park: response.data.park,
                        torqueId: response.data.torqueId,
                        stateNumber: response.data.stateNumber
                    })
                })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        let description = (this.state.description) ? (<h5> Описание : {this.state.description}</h5>) : null;
        return (
            <div>
                <SideBar menuItems={setUpSideBar()}/>
                <div className="content-customer">
                    <Container>
                        <Row>
                            <Col sm="4">
                                <img className="car-img-top" alt="машина" width="250px" style={{borderRadius: "50px"}}
                                     src={carPic}/>
                            </Col>
                            <Col sm="7">
                                <div>
                                    <h4> Модель : {this.state.model}</h4>
                                    <h5> Парк : {this.state.park}</h5>
                                    {description}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4"/>
                            <Col lg="2">
                                <ModalEditCar car={this.state}/>
                            </Col>
                            <Col>
                                <ModalDeleteCar/>
                            </Col>
                        </Row>
                        <CarDiagram car={this.state}/>
                    </Container>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Vehicle

