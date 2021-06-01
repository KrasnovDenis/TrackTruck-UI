import React, {Component} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Message from "./Message";
import MessageRepo from "../repository/MessageRepo";


export default class AdminsChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allMessages: []
        }
    }


    componentDidMount = async () => {
        try {
            //todo: get all users messages

            await MessageRepo
                .getMessagesForAllUsers()
                .then((resp) =>
                    this.setState({
                        allMessages: resp.data
                    })
                )
        } catch (rejectedValue) {
            alert(rejectedValue);
            console.log(rejectedValue);
        }
    }

    render() {
        console.log(this.state.allMessages)
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell size="small"/>
                                <TableCell>
                                    Обращения
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                (this.state.allMessages.map((chat) =>
                                    <Message key={chat.userName} messages={chat}/>
                                ))
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
            </div>
        )
    }
}