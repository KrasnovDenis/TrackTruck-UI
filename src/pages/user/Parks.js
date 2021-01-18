import React, {Component} from "react";
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";
import ParkLabel from "../../components/parks/ParkLabel";
import "../../style/components/customer/Vehicle.css";
import ParkRepo from "../../repository/ParkRepo";
import {Col, Container, Row} from "reactstrap";
import ModalAddPark from "../../components/parks/ModalAddPark";

class Parks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parkIds: [],
            parkNames:[]
        }
    }

    componentDidMount() {
        let userId = localStorage.getItem("userId")
        ParkRepo.getAllParksNames(userId).then((response) => {
            this.setState({
                parkNames: response.data
            })
        })
        ParkRepo.getAllParksIds(userId).then((response) => {
            this.setState({
                parkIds: response.data
            })
        })
    }


    render() {
        return (
            <div className="content-customer">
                <SideBar menuItems={setUpSideBar()}/>
                <Container>
                    <Row>
                        <Col>
                            <h3>Управление парками</h3>
                        </Col>
                        <Col className="sm-1">
                            <ModalAddPark/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Управление парками</h3>
                        </Col>
                    </Row>
                </Container>
                {
                    this.state.parkNames.forEach(park1 => <ParkLabel park={park1}/>)
                }

            </div>
        )
    }
}

export default Parks


function getParkInfoStub() {
    return {
        id: "1",
        owner: "ООО Зеленоглазое Такси",
        name: "Парк сокольники"
    };
}