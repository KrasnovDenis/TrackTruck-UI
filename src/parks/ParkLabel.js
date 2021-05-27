import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ModalDeletePark from "./ModalDeletePark";
import ModalRenamePark from "./ModalRenamePark";

class ParkLabel extends Component {
    render() {
        return (
            <div>

                <ListItem style={{fontFamily: "sans-serif", fontSize: "14px", backgroundColor: "#fff"}}>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalShippingIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <Link to={`parks/${this.props.park.id}`}>
                        <ListItemText
                            primary={this.props.park.name}
                        />
                    </Link>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="edit">
                            <ModalRenamePark park={this.props.park}/>
                        </IconButton>
                        <IconButton aria-label="delete">
                            <ModalDeletePark parkId={this.props.park.id}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>

            </div>
        );

    }
}


export default ParkLabel