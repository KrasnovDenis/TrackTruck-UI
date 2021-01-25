import React, {Component} from 'react';
import sweater from "../style/images/blue-sweater.jpg";
import {Col, Container, Row} from 'reactstrap';
import "../style/pages/Home.css"
import Footer from "./Footer";

class Home extends Component {

    render() {
        return (
            <div>
                <Container fluid="true">
                    <Row>
                        <Col className="sideCol" sm="1"/>
                        <Col style={{fontFamily: "Impact", fontSize: "16px"}}>
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
                                <li>Высокая надежность</li>
                                <li>Низкие цены</li>
                                <li>Понятные графики</li>
                            </ul>
                        </Col>
                        <Col>
                            <img src={sweater} alt="Кортиночка" width="450px"/>
                        </Col>
                        <Col className="sideCol" sm="1"/>
                    </Row>
                    <Row className="Benefit">
                        <Col>
                            <h3 style={{textAlign: "center"}}> Наши основные преимущества</h3>
                        </Col>
                        <br/>
                    </Row>
                    <Row className="Benefit">
                        <hr/>
                        <Col sm="2"/>

                        <Col sm="2"/>
                    </Row>
                </Container>

                <Footer/>
            </div>
        );
    }

}

export default Home;