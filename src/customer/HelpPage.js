import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "./PrivateArea";
import {Col, Container, Row} from "reactstrap";
import torqueSettings from '../style/images/torque.png'
import Footer from "../common/Footer";
import {Button} from '@progress/kendo-react-buttons';
import {PDFExport} from '@progress/kendo-react-pdf';

class HelpPage extends Component {

    constructor(props) {
        super(props)
        this.pdfExportComponent = React.createRef()
        this.contentArea = React.createRef()
    }

    handleExportWithComponent = (event) => {
        this.pdfExportComponent.current.save();
    }



    render() {

        const sideBarItems = setUpSideBar();

        return (
            <div className="feed">
                <PDFExport ref={this.pdfExportComponent} paperSize="A4">
                    <div ref={this.contentArea}>
                        <div className="content-customer">
                            <Container>
                                <Row>
                                    <Col>
                                        <h2>TrackTruck</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h4>Система, отслеживающая состояние автомобиля</h4>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col>
                                        <h2>Инструкция по использованию</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        1. Оборудование
                                        Система мониторинга предполагает наличие в каждой машине приложения Torque
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        2. Установка и сбор данных
                                        Для отсылки данных на систему мониторинга необходимо настроить приложение Torque
                                        как
                                        показано ниже

                                    </Col>
                                </Row>
                                <Row>
                                    <Col/>
                                    <Col>
                                        <img src={torqueSettings} width="300px" alt="torque"/>
                                    </Col>
                                    <Col/>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button onClick={this.handleExportWithFunction}>
                                            Экспорт 1
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button onClick={this.handleExportWithComponent}>
                                            Экспорт 2
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <SideBar menuItems={sideBarItems}/>
                    <Footer/>

                </PDFExport>
            </div>
        );
    }

}

export default HelpPage;



