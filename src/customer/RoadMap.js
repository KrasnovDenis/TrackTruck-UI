import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "./PrivateArea";
import {Col, Container, Row} from "reactstrap";
import Footer from "../common/Footer";
import CarItemsList from "../diagrams/google/CarItemsList";

class RoadMap extends Component {

    render() {

        const sideBarItems = setUpSideBar();

        return (
            <div className="feed">
                <SideBar menuItems={sideBarItems}/>
                <div className="content-customer">
                    <Container>
                        <Row>
                            <Col>
                                <h3>
                                    Аналитика движения по маршрутам согласно GPS координатам
                                </h3>
                            </Col>
                        </Row>
                        <hr/>
                        <br/>
                        <CarItemsList/>
                    </Container>
                </div>
                <Footer/>
            </div>
        );
    }

}

export default RoadMap;



