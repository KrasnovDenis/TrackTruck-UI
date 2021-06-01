import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import '../style/pages/Customer.css';
import {Col, Container, Row} from "reactstrap";
import compLogo from "../style/images/icons/company-logo.png";
import Footer from "../common/Footer";
import UserRepo from "../repository/UserRepo";
import DeleteUserModal from "./DeleteUserModal";

class PrivateArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: [],
            licenseDate: [],
            daysLeft: [],
            carsCount: [],
            parksCount: []

        }
    }

    async componentDidMount() {
        const userId = localStorage.getItem("userId");
        try {
            await UserRepo.getUserInfo(userId)
                .then((response) => {
                    this.setState({
                        name: response.data.name,
                        licenseDate: response.data.licenseDate,
                        daysLeft: response.data.daysLeft,
                        carsCount: response.data.carsCount,
                        parksCount: response.data.parksCount
                    })
                })
        } catch (e) {
            console.log("Данного пользователя не существует")
        }
    }

    render() {
        const sideBarItems = setUpSideBar();
        let licenseDueDate = "";
        if(this.state.licenseDate > 0){
            const dateTime = new Date(this.state.licenseDate)
            let options = {year: 'numeric', month: 'long', day: 'numeric' };
            licenseDueDate = dateTime.toLocaleDateString("ru-RU", options)
        }
        const daysLeft = this.state.daysLeft;


        return (
            <div className="feed">
                <SideBar menuItems={sideBarItems}/>
                <div className="content-customer">

                    <Container>
                        <Row>
                            <Col sm="4">
                                <img className="car-img-top" alt="машина" width="200px" style={{borderRadius: "50px"}}
                                     src={compLogo}/>
                            </Col>
                            <Col sm="7">
                                <div>
                                    <h4> Парков : {this.state.parksCount}</h4>
                                    <h4>Машин : {this.state.carsCount}</h4>
                                    Обслуживаются в данный момент
                                </div>
                                <br/>
                                <br/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>{this.state.name}</h1>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <br/>
                        <Row>
                            <Col lg={9}>
                                <h4> Вы с нами уже {daysLeft} дней</h4>
                                <h5> Ваша лицензия действительна до {licenseDueDate}</h5>
                            </Col>
                            <Col>
                                <DeleteUserModal/>
                            </Col>
                        </Row>

                    </Container>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PrivateArea

export function setUpSideBar() {
    const items = new Map();
    items.set('/customer/parks', 'Автопарки');
    items.set('/customer/roadmaps', 'Маршруты');
    items.set('/customer/feedback', 'Связь с администрацией');
    items.set('/help', 'Помощь');
    return items;
}

