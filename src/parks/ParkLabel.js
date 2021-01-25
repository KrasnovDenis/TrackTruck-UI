import React, {Component} from 'react';
import {ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";


//это один парк (всмысле маленк)
class ParkLabel extends Component {

    render() {
        return (
            <Link to={`parks/${this.props.park.id}`}>
                <ListGroupItem color="info" action>
                    <h5 className="car-model">{this.props.park.name}</h5>
                </ListGroupItem>
            </Link>
        );

    }
}


export default ParkLabel