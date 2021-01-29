import React from 'react';
import '../style/components/NotFound.css';
import {Col, Container, Row} from "reactstrap";
import Footer from "./Footer";

export function NotFound() {
    return (
        <div>
            <Container className="NotFound">
                <Row>
                    <Col>
                        <h1>Страницы не существует</h1>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );

}

