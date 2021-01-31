import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "./PrivateArea";
import {Col, Container, Row} from "reactstrap";
import roadmap from "../style/images/roadmap.png";
import Footer from "../common/Footer";

class RoadMap extends Component{

    render() {

        const sideBarItems = setUpSideBar();

        return (
            <div className="feed">
                <SideBar menuItems={sideBarItems}/>
                <div className="content-customer">
                    <Container>
                        <Row>
                            <Col>
                                <h2>Маршруты движения</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>Пока что не работает, но в будущем позволит выбирать наиболее оптимальные маршруты</h5>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <h2>Аналитика</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Карта движения по маршрутам согласно GPS\GLONASS
                            </Col>
                        </Row>
                        <hr/>
                        <br/>
                        <Row>
                            <Col/>
                            <Col>
                                <img src={roadmap} width="300px" alt="roadmap"/>
                            </Col>
                            <Col/>
                        </Row>
                    </Container>
                </div>
                <Footer/>
            </div>
        );
    }

}

export default RoadMap;



