import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import '../style/pages/Customer.css';
import {Col, Container, Row} from "reactstrap";
import compLogo from "../style/images/icons/company-logo.png";

class PrivateArea extends Component{
    render () {
        const sideBarItems = setUpSideBar();
        return (
            <div className="feed">
                <SideBar menuItems={sideBarItems}/>
                <div className="content-customer">

                    <Container>
                        <Row>
                            <Col sm="4">
                                <img className="car-img-top" alt="машина" width="200px" style={{borderRadius: "50px"}}
                                     src={compLogo}/>
                            </Col>
                            <Col sm="7">
                                <div>
                                    <h4> 5 парков</h4>
                                    <h4> 26 машин</h4>
                                    Обслуживаются в данный момент
                                </div>
                                <br/>
                                <br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>Маруся inc</h1>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <br/>
                        <Row>
                            <Col>
                                <h4> дней с нами</h4>
                                <p> за это время через нас прошло свыше 100500 операций</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default PrivateArea

export function setUpSideBar(){
    const items = new Map();
    items.set('/customer/parks', 'Автопарки');
    items.set('/customer/statistics', 'Аналитика');
    items.set('/customer/roadmaps', 'Маршруты');
    items.set('/customer/license', 'Лицензия');
    items.set('/customer/feedback', 'Связь с администрацией');
    items.set('/help', 'Помощь');
    return items;
}

