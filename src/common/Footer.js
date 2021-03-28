import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

class Footer extends Component {

    render() {
        return (
            <Container fluid="true"
                       style={{position: "relative", backgroundColor: "#111", color: '#fff', zIndex: "10"}}>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        <h3>Monitoring</h3>
                        <br/>
                        <br/>
                        <br/>
                    </Col>
                    <br/>
                    <br/>
                    <br/>
                </Row>
                <Row>
                    <Col sm="1"/>
                    <Col sm="2">
                        <h4>Monitoring 0.1</h4>
                    </Col>
                    <Col sm="1">
                        <div>
                            <Link to="/about">
                                О нас
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to="/help">
                                Help
                            </Link>
                        </div>
                    </Col>
                    <Col sm="2">Наш офис расположен: г.Саратов ул. Трынина д.123</Col>
                    <Col sm="2">Для коммерческих предложений
                        <br/>
                        <a href="mailto:Elo.1972@yandex.ru?subject=Monitoring MQ"> Пишите на почту </a>
                    </Col>
                    <Col sm="2">
                        Документация
                        <div>
                            <Link to="http://www.consultant.ru/document/cons_doc_LAW_34683/">
                                Трудовой кодекс
                            </Link>
                        </div>
                        <div>
                            <Link to="https://digital.gov.ru/ru/personaldata/">
                                Закон о хранении персональных данных
                            </Link>
                        </div>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
            </Container>

        );
    }
}

export default Footer