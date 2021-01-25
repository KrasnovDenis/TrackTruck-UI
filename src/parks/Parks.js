import React, {Component} from "react";
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "../user/PrivateArea";
import ParkLabel from "./ParkLabel";
import "../style/components/customer/Vehicle.css";
import ParkRepo from "../repository/ParkRepo";
import {Col, Container, ListGroup, Row} from "reactstrap";
import ModalAddPark from "./ModalAddPark";
import ModalDeletePark from "./ModalDeletePark";
import ModalRenamePark from "./ModalRenamePark";

class Parks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parks: []
        }
    }

    async componentDidMount() {
        let userId = localStorage.getItem("userId")

        await ParkRepo
            .getAllParksByOwner(userId)
            .then((response) => (
                this.setState({parks: response.data})))

    }


    render() {
        return (
            <div className="content-customer">
                <SideBar menuItems={setUpSideBar()}/>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <h3>Ваши парки, {localStorage.getItem("firstName")}</h3>
                        </Col>

                    </Row>
                    <br/>
                    <Row>
                        <Col className="sm-1">
                            <ListGroup>
                                {
                                    this.state.parks.map(park => <ParkLabel park={park}/>)
                                }
                            </ListGroup>
                        </Col>
                        <Col className="sm-1">
                            <ModalAddPark/>
                            <ModalDeletePark/>
                            <ModalRenamePark/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Parks