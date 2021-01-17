import React from 'react';
import '../style/components/NotFound.css';
import {Col, Container, Row} from "reactstrap";

export function NotFound() {
    return (
            <Container className="NotFound">
                <Row>
                    <Col><h1>Страницы не существует</h1></Col>
                </Row>
            </Container>
    );

}

