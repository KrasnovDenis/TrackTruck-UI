import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "./PrivateArea";
import {Col, Container, Row} from "reactstrap";
import '../style/components/customer/Feedback.css';
import supportAvatar from '../style/images/icons/support-avatar.png';
import companyAvatar from '../style/images/icons/company-logo.jpg';
import Footer from "../common/Footer";
import {Button, TextField} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MessageRepo from "../repository/MessageRepo";

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentChat: [],
            message: ""
        }
    }

    componentDidMount = async () => {
        //todo: make messages loading
        try {
            await MessageRepo
                .getMessagesForUser(localStorage.getItem('userId'))
                .then((response) => (this.setState({
                    currentChat: response.data
                })))
        } catch (rejected) {
            console.log(rejected)
        }
    }

    sendMessage = async () => {
        try {
            await MessageRepo.sendMessage("ad1cf624-e98e-489e-b426-9d7c1781ce93", this.state.message)
        } catch (rejected) {
            console.log();
        }
    }

    onChangeMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        const sideBarItems = setUpSideBar();

        return (

            <div className="feed">
                <SideBar menuItems={sideBarItems}/>
                <div className="content-customer">
                    <h2>Связаться с администрацией</h2>
                    <Container>
                        <Row>
                            <Col>
                                {this.state.currentChat.map((message) => (
                                    (message.senderId === localStorage.getItem('userId'))
                                        ? <div className="container">
                                            <img src={companyAvatar} className="avatar right" style={{width: "60px"}}
                                                 alt="Avatar"/>
                                            <p style={{textAlign: "right", fontSize: "16px"}}>{message.text}</p>
                                            <span className="time-right">{new Date(message.date).toLocaleString()}</span>
                                        </div>
                                        : <div className="container darker">
                                            <img src={supportAvatar} alt="Avatar" style={{width: "60px"}}
                                                 className="avatar"/>
                                            <p style={{fontSize: "16px"}}>{message.text}</p>
                                            <span className="time-left">{new Date(message.date).toLocaleString()}</span>
                                        </div>
                                ))}

                            </Col>
                        </Row>
                    </Container>
                    <Container style={{backgroundColor: "#fff", border: "0px"}}>
                        <Row>
                            <Col lg={10}>
                                <TextField
                                    style={{width: "103%"}}
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={5}
                                    placeholder={"Введите текст"}
                                    onChange={this.onChangeMessage}
                                    variant="outlined"
                                />
                            </Col>
                            <Col lg={2}>
                                <Button
                                    onClick={this.sendMessage}
                                    variant="outlined"
                                    color="primary">
                                    <SendIcon/>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Feedback



