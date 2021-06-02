import React, {Component} from 'react';
import '../style/pages/Admin.css';
import {Col, Container, Row} from "reactstrap";
import CustomerTable from "./CustomerTable";
import Footer from "../common/Footer";
import AdminsChat from "./AdminsChat";

class Admin extends Component {


    render() {
        return (
            <div className="homeContainer">
                <Container style={{marginLeft: "6%", backgroundColor: "#fff"}}>
                    {
                        localStorage.getItem('roleId') !== 'ADMIN'
                            ? <h2> недостаточно прав </h2>
                            : <div>
                                <Row>
                                    <Col md="5" style={{fontFamily: "Impact", fontSize: "16px"}}>
                                        <h1>Кабинет администратора</h1>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col lg={4}>
                                        <AdminsChat/>
                                    </Col>
                                    <Col lg={8}>
                                        <CustomerTable/>
                                    </Col>
                                </Row>
                            </div>
                    }

                </Container>

                <Footer/>
            </div>
        );
    }
}

export default Admin


