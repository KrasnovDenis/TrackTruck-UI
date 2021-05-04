import React, {Component} from 'react';
import Footer from "./Footer";
import {Container} from "reactstrap";

class About extends Component {

    render() {
        return (
            <div>
                <Container fluid="true" style={{fontSize: '13px'}}>
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-4">TrackTruck</h1>
                            <p className="lead">Приложение для мониторинга состояния автомобиля <strong>v.0.1</strong>
                            </p>
                        </div>
                    </div>

                </Container>
                <Footer/>
            </div>

        )
            ;
    }
}

export default About