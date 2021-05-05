import React, {Component} from 'react';
import sweater from "../style/images/blue-sweater.jpg";
import {Col, Container, Row} from 'reactstrap';
import "../style/pages/Home.css"
import Footer from "./Footer";

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
                        <Col>
                            <h3 style={{textAlign: "center"}}> Наши основные преимущества</h3>
                        {/*    todo: make explanation why monitoring is important*/}
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