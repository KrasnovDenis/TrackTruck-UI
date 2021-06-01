import React, {Component} from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import {MessageLeft, MessageRight} from "./MessagesLayout";
import {Col, Container, Row} from "reactstrap";
import {Button, TextField} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MessageRepo from "../repository/MessageRepo";

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            text: "",
            selectedUser: []
        }
    }

    setOpen = () => {
        this.setState({open: !this.state.open})
    }

    sendMessage = async () => {
        try {
            await MessageRepo.sendMessage(this.props.messages.senderId, this.state.text)
        } catch (rejectedValue) {
            console.log(rejectedValue)
        }
    }

    onChangeText = (e) => {
        this.setState({text: e.target.value})
    }

    render() {
        const chat = this.props.messages

        if (chat.senderId === localStorage.getItem("userId")) {
            return (<div/>)
        }

        return (
            <React.Fragment>
                <TableRow>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={this.setOpen}>
                            {this.state.open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                        </IconButton>
                    </TableCell>
                    <TableCell>
                        {chat.userName}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>

                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>

                            <Box margin={1}>
                                <Table size="small" aria-label="purchases">
                                    <TableBody>
                                        <TableRow key={chat.userName}>
                                            <div style={{maxHeight: "500px", overflowY: "scroll"}}>

                                                {
                                                    (chat.messageList.map(message => ((message.senderId === localStorage.getItem("userId"))
                                                        ? <MessageRight
                                                            message={message}
                                                            name={chat.userName}
                                                        />
                                                        : <MessageLeft
                                                            message={message}
                                                            name={chat.userName}
                                                        />)))
                                                }

                                            </div>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                            <Container style={{backgroundColor: "#fff", border: "0px"}}>
                                <Row>
                                    <Col lg={9}>
                                        <TextField
                                            style={{width: "110%"}}
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={5}
                                            placeholder={"Введите текст"}
                                            onChange={this.onChangeText}
                                            variant="outlined"
                                        />
                                    </Col>
                                    <Col lg={1}>
                                        <Button
                                            onClick={this.sendMessage}
                                            variant="outlined"
                                            color="primary">
                                            <SendIcon/>
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );

    }
}