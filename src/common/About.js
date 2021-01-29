import React, {Component} from 'react';
import Footer from "./Footer";
import {Container} from "reactstrap";

class About extends Component {

    render() {
        return (
            <Container fluid="true">
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-4">Monitoring MQ</h1>
                        <p className="lead">Приложение для мониторинга состояния автомобиля <strong>v.0.1</strong></p>
                    </div>
                </div>
                <Footer/>
            </Container>
        );
    }
}

export default About