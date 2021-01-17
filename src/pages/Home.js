import React, {Component} from 'react';
import sweater from "../style/images/blue-sweater.jpg";
import {Col, Container, Row} from 'reactstrap';
import "../style/pages/Home.css"

class Home extends Component {

    render() {
        return (
                <Container className="HomeContainer" fluid="true" >
                    <Row>
                        <Col sm="1"></Col>
                        <Col style={{fontFamily: "Impact", fontSize: "16px"}}>
                            <h1>Автопарк расширяется ? </h1>
                            <h1>Cтановится сложно управлять?</h1>
                            <h2> Мы поможем!</h2>
                        </Col>
                        <Col>
                            <img src={sweater} alt="Кортиночка" width="450px"/>
                        </Col>
                    </Row>
                </Container>
        );
    }

}

export default Home;