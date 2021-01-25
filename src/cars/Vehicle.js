import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "../user/PrivateArea";
import CarRepo from "../repository/CarRepo";
import {Col, Container, Row} from "reactstrap";
import carPic from "../style/images/icons/car_pic.jpeg";
import lineDiagram from "../style/images/line-diagram.png";
import circleDiagram from "../style/images/circle-diagram.png";
import "../style/components/customer/Vehicle.css"

class Vehicle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: "",
            description: "",
            year: "",
            park: ""
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
            <div>
                <SideBar menuItems={setUpSideBar()}/>
                <div className="content-customer">
                    <Container>
                        <Row>
                            <Col>
                                <img className="car-img-top" alt="машина" width="250px" style={{borderRadius: "50px"}}
                                     src={carPic}/>
                            </Col>
                            <Col>
                                <div>
                                    <div> Модель : {this.state.model}</div>
                                    <div> Описание : {this.state.description}</div>
                                    <div> Парк : {this.state.park}</div>
                                </div>
                            </Col>
                            <Col/>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <h3 style={{textAlign: "center"}}>Метрики и данные</h3>
                                <br/>
                                <hr/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <strong>
                                    Перед вами диаграмма расхода топлива для автомобиля за текущую неделю
                                    Перед вами диаграмма расхода топлива для автомобиля за текущую неделю
                                    Перед вами диаграмма расхода топлива для автомобиля за текущую неделю
                                    Перед вами диаграмма расхода топлива для автомобиля за текущую неделю
                                </strong>
                            </Col>
                            <Col sm="6">
                                <img alt="линейная диаграмма" width="350px" src={lineDiagram}/>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col sm="6">
                                <img className="car-img-top" alt="круговая диаграмма" width="350px"
                                     src={circleDiagram}/>
                            </Col>
                            <Col sm="6">
                                <strong>
                                    Диаграмма распределения поездок по дням недели
                                    Диаграмма распределения поездок по дням недели
                                    Диаграмма распределения поездок по дням недели
                                    Диаграмма распределения поездок по дням недели
                                </strong>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        )
    }
}

export default Vehicle

