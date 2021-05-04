import React, {Component} from "react";
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "../customer/PrivateArea";
import ParkLabel from "./ParkLabel";
import "../style/components/customer/Vehicle.css";
import ParkRepo from "../repository/ParkRepo";
import {Col, Container, Row} from "reactstrap";
import ModalAddPark from "./ModalAddPark";
import ModalRenamePark from "./ModalRenamePark";
import Footer from "../common/Footer";
import AllParksDiagram from "../diagrams/parks/AllParksDiagram";
import List from "@material-ui/core/List";

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
            <div>
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
                                <List dense={true}>
                                    {
                                        this.state.parks.map(park => <ParkLabel park={park}/>)
                                    }
                                </List>
                            </Col>
                            <Col className="sm-1">
                                <ModalAddPark/>
                                <ModalRenamePark/>
                            </Col>
                        </Row>
                    </Container>
                    <AllParksDiagram parks = {this.state.parks}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Parks