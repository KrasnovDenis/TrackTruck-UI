import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "./PrivateArea";
import {Col, Container, Row} from "reactstrap";

class Statistics extends Component{

    render(){
        const sideBarItems = setUpSideBar();
        return (
            <div className="content-customer">
                <SideBar menuItems = {sideBarItems}/>
                <Container>
                    <Row>
                        <Col>
                            Мониторинг автопарков
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h5> Выберите тип графика, автопарк, автомобиль</h5>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }

}


export default Statistics
