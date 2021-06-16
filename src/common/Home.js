import React, {Component} from 'react';
import sweater from "../style/images/blue-sweater.jpg";
import {Col, Container, Row} from 'reactstrap';
import "../style/pages/Home.css"
import Footer from "./Footer";
import money from '../style/images/icons/money.png'
import fuel from '../style/images/icons/fuel.png'
import gps from '../style/images/icons/gps.png'

class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <Container style={{marginLeft: "6%", backgroundColor: "#fff"}}>
                    <Row>
                        <Col md="5" style={{fontFamily: "Impact", fontSize: "16px"}}>
                            <h1>Автопарк расширяется ? </h1>
                            <h1>Мониторинг отнимает много времени?</h1>
                            <hr/>
                            <h2> Мы знаем как вам помочь!</h2>

                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h4>Мониторинг автопарка без ограничений!</h4>
                            <ul>
                                <li key="point1">Высокая надежность</li>
                                <li key="point2">Низкие цены</li>
                                <li key="point3">Понятные графики</li>
                            </ul>
                        </Col>
                        <Col md="4">
                            <img src={sweater} alt="Кортиночка" width="500px"/>
                        </Col>
                    </Row>
                    <Row className="Benefit">
                        <Col style={{textAlign: "center"}}>
                            <h3> Наши возможности</h3>
                            <Container>
                                <Row>
                                    <Col>
                                        <strong> С нами дешевле</strong>
                                        <img src={money} width={300} height={300} alt={"money"}/>
                                    </Col>
                                    <Col>
                                        <strong> Контроль топлива</strong>
                                        <img src={fuel}  width={300} height={300} alt={"money"}/>
                                    </Col>
                                    <Col>
                                        <strong>Отслеживание GPS</strong>
                                        <img src={gps}  width={300} height={300} alt={"money"}/>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <br/>
                        <br/>
                        <br/>
                    </Row>
                </Container>

                <Footer/>
            </div>
        );
    }

}

export default Home;