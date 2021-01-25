import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

class Footer extends Component {

    render() {
        return (
            <Container fluid="true" style={{backgroundColor: "#444", color: '#fff'}}>
                <Row>
                    <Col style={{textAlign: "center"}}>
                        <h3>Monitoring Now!</h3>
                        <br/>
                        <h4>Приложение для отслеживания состояния автомобиля</h4>
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Footer