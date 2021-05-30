import React, {Component} from 'react';
import '../style/pages/Admin.css';
import {Col, Container, Row} from "reactstrap";
import CustomerTable from "./CustomerTable";
import Footer from "../common/Footer";

class Admin extends Component {


    render() {
        return (
            <div className="homeContainer">
                <Container style={{marginLeft: "6%", backgroundColor: "#fff"}}>
                    <Row>
                        <Col md="5" style={{fontFamily: "Impact", fontSize: "16px"}}>
                            <h1>Кабинет администратора</h1>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col lg={4}>
                            <h3>
                                Обращения клиентов
                            </h3>
                        </Col>
                        <Col lg={8}>
                            <CustomerTable/>
                        </Col>
                    </Row>
                </Container>

                <Footer/>
            </div>
        );
    }
}

export default Admin


